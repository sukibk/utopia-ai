import styles from './ProfilePageContainer.module.css';
import {MainNavigation} from "../MainNavigation";

function Outlet() {
    return null;
}

export const ProfilePageContainer = () => {
    return <div className={styles['profile-page-container--wrapper']}>
        <section className={styles['profile-page-container--main']}>
            <div>
                <MainNavigation />
            </div>
            <div>
                <Outlet/>
            </div>
        </section>
    </div>
}