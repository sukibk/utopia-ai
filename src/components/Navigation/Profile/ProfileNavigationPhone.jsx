import {NavLink} from "react-router-dom";
import {useSubmit} from "react-router-dom";
import styles from './ProfileNavigation.module.css';
import colorMode from '../../../../ColorMods.module.css';
import logo from '../../../assets/logo.png';
import {redirect, useNavigate} from "react-router";
import toast from "react-hot-toast";
import {signOut} from "firebase/auth";
import {auth} from "../../../firebase.js";
import {useState} from "react";
import useLocalStorage from "use-local-storage";
import {AiFillApple} from "react-icons/all.js";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../../store/themeSlice.js";

export const ProfileNavigationPhone = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isExpanded, setIsExpanded] = useState(false);
    const [nameNav, setNameNav] = useState('Menu')

    const switchTheme = () => {
        const newTheme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
        dispatch(setTheme({theme: newTheme}));
        localStorage.setItem('theme', `${newTheme}`)
    }

    let wrapperClass = styles['wrapper-phone'];
    let menuNacClass = styles['navbar--menu-navigation'];

    if(isExpanded){
        wrapperClass = `${styles['wrapper-phone']} ${styles['navbar--menu-opened']}`;
        menuNacClass = `${styles['navbar--menu-navigation']} ${styles['navbar--menu-navigation-opened']}`;
    }

    const expandNav = () => {
        setIsExpanded(prevValue => !prevValue);
    }

    const changeNavLabel = (newName) => {
        setNameNav(newName)
    }

    return <div className={wrapperClass}>
        <div className={`${styles['nav--section']}`}>
            <nav className={styles.navbar}>
                <button className={styles.hide} onClick={expandNav}><p className={styles['hide-content']}>
                    {nameNav}</p>
                </button>
                <ul className={styles['navbar-menu']}>
                    <div className={menuNacClass}>
                        <div className={styles['website-logo']}>
                            {/*<img src={logo} height='50px' width='100px' />*/}
                            {/*<p><AiFillApple /></p>*/}
                        </div>
                        <li onClick={() => navigate('')}>
                            <NavLink end to='' onClick={() => {changeNavLabel('USER INFO'); expandNav()}} className={({isActive}) => !isActive ? styles['navbar--menu-item'] : `${styles['navbar--menu-item-active']} ${styles['navbar--menu-item-active1']}`}>USER INFO</NavLink>
                        </li>
                        <li onClick={() => navigate('tokens')}>
                            <NavLink to='tokens' className={({isActive}) => !isActive ? styles['navbar--menu-item'] : `${styles['navbar--menu-item-active']} ${styles['navbar--menu-item-active2']}`}>TOKENS</NavLink>
                        </li>
                        <li onClick={() => navigate('locker')}>
                            <NavLink to='locker' className={({isActive}) => !isActive ? styles['navbar--menu-item'] : `${styles['navbar--menu-item-active']} ${styles['navbar--menu-item-active3']}`}>LOCKER</NavLink>
                        </li>
                        <li onClick={() => navigate('settings')}>
                            <NavLink to='settings' className={({isActive}) => !isActive ? styles['navbar--menu-item'] : `${styles['navbar--menu-item-active']} ${styles['navbar--menu-item-active4']}`}>SETTINGS</NavLink>
                        </li>
                        <li onClick={() => navigate('help')}>
                            <NavLink to='help' className={({isActive}) => !isActive ? styles['navbar--menu-item'] : `${styles['navbar--menu-item-active']} ${styles['navbar--menu-item-active5']}`}>HELP</NavLink>
                        </li>
                        <div className={styles['navbar--menu-actions']}>
                            <button onClick={switchTheme}>Sign Out</button>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
}
