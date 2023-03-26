import {NavLink} from "react-router-dom";
import styles from './MainNavigation.module.css';
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

export const MainNavigation = () => {
    const [desktopNavMenuDisplay, setDesktopMovNavMenuDisplay] = useState('');

    const user = useSelector(store => store.auth.currentUser);

    const userIsLoggedIn = user !== null;

    let className = `${styles['navbar--menu-desktop']}`;
    let phoneNavClass = `${styles['navbar--menu-phone_button']} ${styles['navbar--menu-phone_button_closed']}`

    if(desktopNavMenuDisplay === '') {
        phoneNavClass = `${styles['navbar--menu-phone_button']} ${styles['navbar--menu-phone_button_closed']}`
        className = `${styles['navbar--menu-desktop']} ${styles['hide-on-mobile']}`
    }
    else {
        phoneNavClass = `${styles['navbar--menu-phone_button']} ${styles['navbar--menu-phone_button_trans']}`
        className = `${styles['navbar--menu-desktop']} ${styles['fade-in']}`
    }

    const togglePhoneMenu = () => {
        if(desktopNavMenuDisplay !== ''){
            setDesktopMovNavMenuDisplay('');}
        else{
            setDesktopMovNavMenuDisplay(1);}}


    return <div className={styles.wrapper}>
        <div className={styles['nav--section']}>
            <nav className={styles.navbar}>
                <ul className={styles['navbar--menu']}>
                    <div className={className}>
                    <li>
                        <NavLink onClick={() => setDesktopMovNavMenuDisplay('')} to='' className={({isActive}) => !isActive ? styles['navbar--menu_item'] : styles.active} end>HOME</NavLink>
                    </li>
                        { !userIsLoggedIn &&
                    <li>
                        <NavLink onClick={() => setDesktopMovNavMenuDisplay('')} to='login' className={({isActive}) => !isActive ? styles['navbar--menu_item'] : styles.active} >LOGIN</NavLink>
                    </li> }
                    <li>
                        <NavLink onClick={() => setDesktopMovNavMenuDisplay('')} to='products' className={({isActive}) => !isActive ? styles['navbar--menu_item'] : styles.active} >PRODUCTS</NavLink>
                    </li>
                    {userIsLoggedIn &&  <>
                    <li>
                        <NavLink onClick={() => setDesktopMovNavMenuDisplay('')} to='profile' className={({isActive}) => !isActive ? styles['navbar--menu_item'] : styles.active} >PROFILE</NavLink>
                    </li>
                        <li>
                            <div className={styles['navbar--actions']}>
                                <button className={styles['navbar--button']}>CHART</button>
                            </div>
                        </li></>}
                        </div>
                    <li className={styles['navbar--menu-phone']}>
                        <button  onClick={togglePhoneMenu} className={phoneNavClass} tuype='button'>
                        <div className={`${styles['navbar--menu-phone_item']} ${styles['navbar--menu-phone_item-1']}`}> </div>
                        <div className={`${styles['navbar--menu-phone_item']} ${styles['navbar--menu-phone_item-2']}`}> </div>
                        <div className={`${styles['navbar--menu-phone_item']} ${styles['navbar--menu-phone_item-3']}`}> </div>
                        </button>
                        </li>
                </ul>
            </nav>
        </div>
    </div>
}