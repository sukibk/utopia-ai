import styles from './HomePageContainer.module.css';
import {TitleBox} from "./TitleBox.jsx";
import {Card40} from "../UI/Card40.jsx";
import {RegisterForm} from "./RegisterForm.jsx";
import {useSelector} from "react-redux";
import {RegisteredHomePage} from "./RegisteredHomePage.jsx";
import {auth} from "../../firebase.js";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import toast, {Toaster} from "react-hot-toast";
import {removeUser} from "../../store/authSlice.js";
import {redirect} from "react-router";

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
        <Card40>
            <TitleBox />
        </Card40>
        <Card40>
            {!user ? <RegisterForm onRegister={registerUser}/> : <RegisteredHomePage
                onLogOut={loggingOutUser} email={user.email}/>}
        </Card40>
    </section>
}


export async function action({request, params}){
    console.log('aa')
    toast.promise(signOut(auth),{
        loading: 'Logging Out...',
        success: 'Logged Out!',
        error: 'Error Occurred',
    })
    return redirect('/');
}