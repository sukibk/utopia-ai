import styles from './HomePageContainer.module.css';
import {TitleBox} from "./TitleBox";
import {Card} from "./UI/Card";
import {MainForm} from "./MainForm";
import {useSelector} from "react-redux";
import {MainFormLoggedIn} from "./MainFormLoggedIn";
import {auth} from "../firebase.js";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import toast, {Toaster} from "react-hot-toast";
import {removeUser} from "../store/authSlice.js";

export const HomePageContainer = () =>{
    const user = useSelector(store => store.auth.currentUser)

    const registerUser = (email, password) => {
        toast.promise(createUserWithEmailAndPassword(auth, email, password),{
            loading: 'Registering...',
            success: 'Registered!',
            error: 'Error Occurred',
        })
    }

    const loggingOutUser = () => {
        toast.promise(signOut(auth),{
            loading: 'Logging Out...',
            success: 'Logged Out!',
            error: 'Error Occurred',
        })
    }

    return <section className={styles['main--section']}>
        <Toaster />
        <Card>
            <TitleBox />
        </Card>
        <Card>
            {!user ? <MainForm onRegister={registerUser}/> : <MainFormLoggedIn
                onLogOut={loggingOutUser} email={user.email}/>}
        </Card>
    </section>
}