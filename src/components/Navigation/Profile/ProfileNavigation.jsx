import {NavLink} from "react-router-dom";
import {useSubmit} from "react-router-dom";
import styles from './ProfileNavigation.module.css';
import logo from '../../../assets/logo.png';
import {redirect, useNavigate} from "react-router";
import toast from "react-hot-toast";
import {signOut} from "firebase/auth";
import {auth} from "../../../firebase.js";

export const ProfileNavigation = () => {
    const navigate = useNavigate();
    // const submit = useSubmit();
    // //
    // // const onLogOut = () =>{
    // //     submit(null, {action: ''});
    // }

    return <div className={styles.wrapper}>
        <div className={styles['nav--section']}>
            <nav className={styles.navbar}>
                <ul className={styles['navbar-menu']}>
                    <div className={styles['navbar--menu-navigation']}>
                        <div className={styles['website-logo']}>
                        <img src={logo} height='50px' width='100px'></img>
                        </div>
                        <li onClick={() => navigate('')}>
                            <NavLink end to='' className={({isActive}) => !isActive ? styles['navbar--menu-item'] : `${styles['navbar--menu-item-active']} ${styles['navbar--menu-item-active1']}`}>USER INFO</NavLink>
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
                            <button >Sign Out</button>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
}
