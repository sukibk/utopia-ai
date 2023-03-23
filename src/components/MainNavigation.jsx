import {NavLink} from "react-router-dom";
import styles from './MainNavigation.module.css';

export const MainNavigation = () => {
    return <div className={styles.wrapper}>
        <div className={styles['nav--section']}>
            <nav className={styles.navbar}>
                <ul className={styles['navbar--menu']}>
                    <li>
                        <NavLink to='' className={({isActive}) => !isActive ? styles['navbar--menu_item'] : styles.active} end>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='products'className={({isActive}) => !isActive ? styles['navbar--menu_item'] : styles.active} end>PRODUCTS</NavLink>
                    </li>
                    <li>
                        <NavLink to='profile' className={({isActive}) => !isActive ? styles['navbar--menu_item'] : styles.active} end>PROFILE</NavLink>
                    </li>
                </ul>
                <div className={styles['navbar--actions']}>
                    <button className={styles['navbar--button']}>CHART</button>
                </div>
            </nav>
        </div>
    </div>
}