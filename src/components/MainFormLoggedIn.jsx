import styles from "./MainFormLoggedIn.module.css";
import {signOut} from "firebase/auth";
import {auth} from "../firebase.js";
import {removeUser} from "../store/authSlice.js";

export const MainFormLoggedIn = (props) => {
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
            <button className={styles['button']}>GO TO PROFILE</button>
        </div>
    </section>
}