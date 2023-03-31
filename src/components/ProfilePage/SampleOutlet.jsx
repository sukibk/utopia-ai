import styles from './Sampleoutlet.module.css'
import {ProfileNavigation} from "../Navigation/Profile/ProfileNavigation";
import {ProfileNavigationPhone} from "../Navigation/Profile/ProfileNavigationPhone";

export const SampleOutlet = () => {
    return <div className={styles.aa}>
        <h1>User Information</h1>
        <ProfileNavigationPhone/>
    </div>
}