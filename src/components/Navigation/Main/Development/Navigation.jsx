import styles from './Navigation.module.css'
import {NavItem} from "./NavItem.jsx";
import {CSSTransition} from "react-transition-group";
import {useEffect, useState} from "react";
import {HamburgerNav} from "./HamburgerNav";
import DayNightToggle from "react-day-and-night-toggle";

export const navigationLinks = [
    {
        id: 'home',
        navigationLabel: 'Home',
        navigateTo: '/',
        protected: ''
    },
    {
        id: 'login',
        navigationLabel: 'Login',
        navigateTo: 'login',
        protected: ''
    },
    {
        id: 'products',
        navigationLabel: 'Products',
        navigateTo: 'products',
        protected: ''
    },
    {
        id: 'profile',
        navigationLabel: 'Profile',
        navigateTo: 'profile',
        protected: ''
    }
]

export const Navigation = () => {
    const [showPhoneNavButton, setShowPhoneNavButton] = useState(false);
    const [expandMenu, setExpandMenu] = useState(true);


    const handleResize = () => {
        let width = window.innerWidth;
        console.log(width, showPhoneNavButton)
        if (width < 1024) {
            setShowPhoneNavButton(true)
            setExpandMenu(false)
        }
        else
        {
            setShowPhoneNavButton(false)
            setExpandMenu(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        if(window.innerWidth < 1024){
            setShowPhoneNavButton(true);
            setExpandMenu(false);
        }

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return <CSSTransition in={expandMenu} classNames={{
        enter: '',
        enterActive: styles['main-navigation--slide__down'],
        exit: '',
        exitActive: styles['main-navigation--slide__up']
    }} timeout={400}>
    <header className={styles['main-navigation--wrapper']}>
        <section className={styles['main-navigation--inner']}>
            <nav className={styles['main-navigation']}>
                <CSSTransition in={expandMenu} classNames={{
                    enter: '',
                    enterActive: styles['main-navigation--fade__out'],
                    exit: '',
                    exitActive: styles['main-navigation--fade__out']
                }} mountOnEnter unmountOnExit timeout={50}>
                <ul className={styles['main-navigation--menu']}> {/* phone/desktop */}
                    {navigationLinks.map(({id, navigationLabel, navigateTo}) => (
                        <li className={'main-navigation--item-wrapper'} key={navigationLabel}>
                        <NavItem
                            navigateTo = {navigateTo}
                            navigationLabel = {navigationLabel}
                            isExpanded={showPhoneNavButton}
                            onNavigate = {() => setExpandMenu(prevState => !prevState)}
                        />
                        </li>
                    ))}
                    {!showPhoneNavButton &&
                    <li className={styles['main-navigation--item--theme-switcher']}>
                        <DayNightToggle className={styles['navbar--button']}
                        />
                    </li>}
                </ul>
                </CSSTransition>
                {/*necemo ovako*/}
                {showPhoneNavButton &&
                <div className={styles['main-navigation--phone-actions']}>
                <HamburgerNav show={showPhoneNavButton} navExpanded={expandMenu} onShow={() => setExpandMenu(prevState => !prevState)} />
                <DayNightToggle className={styles['navbar--button']}
                /></div>}
            </nav>
        </section>
    </header>
    </CSSTransition>
}