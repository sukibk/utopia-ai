import styles from "./RegisteredMainPage.module.css";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase.js";
import {removeUser} from "../../store/authSlice.js";
import {Link} from "react-router-dom";

export const RegisteredHomePage = (props) => {
    const logOutHandler = () => {
        props.onLogOut();
    }


    return <section className={styles['logged-in--wrapper']}>
        <div className={styles['logged-in--user_info']}>
        <h1>Welcome</h1>
        <p>{props.email}</p>
        </div>
        <div className={styles['logged-in--actions']}>
            <button onClick={logOutHandler} className={styles['button']}>LOG OUT</button>
            <Link to={'profile'} className={styles['button']}>GO TO PROFILE</Link>
        </div>
    </section>
}