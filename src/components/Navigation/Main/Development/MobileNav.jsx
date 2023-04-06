import {navigationLinks} from "./Navigation.jsx";
import styles from "./MobileNav.module.css";
import {HamburgerNav} from "./HamburgerNav";
import DayNightToggle from "react-day-and-night-toggle";
import {useEffect, useState} from "react";
import {setTheme} from "../../../../store/themeSlice.js";
import {useDispatch} from "react-redux";
import {ModalNav} from "./ModalNav";
import {createPortal} from "react-dom";
import {CSSTransition} from "react-transition-group";
import {MobileBackDrop} from "./MobileBackDrop";

export const MobileNav = () =>{
    const [navIsOpened, setNavIsOpened] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState();
    let darkModeChecker = localStorage.getItem('theme');
    const dispatch = useDispatch();

    const switchTheme = () => {
        const newTheme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
        dispatch(setTheme({theme: newTheme}));
        document.body.setAttribute('data-theme', `${newTheme}`)
        console.log(document.getElementById('root'));
        localStorage.setItem('theme', `${newTheme}`)
    }

    useEffect(() => {
        if(darkModeChecker === 'light'){
            setIsDarkMode(true);
        }
        else setIsDarkMode(false);
    }, [])


    return <header className={styles['mobile-navigation--wrapper']}>
        <CSSTransition in={!navIsOpened} timeout={500} classNames={{
            enter: '',
            enterActive: styles['slide-down'],
            exit: '',
            exitActive: styles['slide-up']
        }}>
        <section className={styles['mobile-navigation']}>
                <HamburgerNav show={true} onShow={() => {
                    console.log('provera'); setNavIsOpened(prevValue => !prevValue)}}/>
            <CSSTransition mountOnEnter unmountOnExit in={navIsOpened} timeout={500} classNames={{
                    enter: '',
                    enterActive: styles['slide-in'],
                    exit: '',
                    exitActive: styles['slide-out']
                }}>
            <ModalNav closeNav={() => {
                console.log('closed');setNavIsOpened(prevValue => !prevValue)}}/>
            </CSSTransition>
            <CSSTransition mountOnEnter unmountOnExit in={navIsOpened} timeout={500} classNames={{
                enter: '',
                enterActive: styles['slide-in__reverse'],
                exit: '',
                exitActive: styles['slide-out__reverse']
            }}>
                <MobileBackDrop />
            </CSSTransition>
        </section>
    </CSSTransition>
        <section className={styles['theme-switcher']}>
            <DayNightToggle className={styles['navbar--button--phone']}
                            onChange={() => {setIsDarkMode(!isDarkMode); switchTheme()}}
                            checked={isDarkMode}
            />
        </section>
    </header>

}