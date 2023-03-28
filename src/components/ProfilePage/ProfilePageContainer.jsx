import styles from './ProfilePageContainer.module.css';
import {MainNavigation} from "../Navigation/Main/MainNavigation.jsx";
import {ProfileNavigation} from "../Navigation/Profile/ProfileNavigation";
import {Outlet} from "react-router";

export const ProfilePageContainer = () => {
    return <div className={styles['profile-page-container--wrapper']}>
        <section className={styles['profile-page-container--main']}>
            <div className={styles.navigation}>
                <ProfileNavigation />
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </section>
    </div>
}