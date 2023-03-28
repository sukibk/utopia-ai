import {Form, Link} from 'react-router-dom';
import styles from './LoginPageForm.module.css';
import {redirect, useLoaderData} from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase.js";
import toast, {Toaster} from "react-hot-toast";

export const LoginPageForm = () => {

   return <div className={styles['login-form--wrapper']}>
       <h1>ENTER THE UTOPIA</h1>
        <Form method='post' className={styles['login-form--form']}>
            <div className={styles['login-form-input--container']}>
                <input name='email' type = 'e-mail' placeholder='E-Mail'/>
                <input name='password' type = 'password' placeholder='Password'/>
            </div>
            <div className={styles['login-form--actions']}>
                <button className={styles['login-form--actions_button']}>LOG IN</button>
                <Link to='/' className={`${styles['login-form--actions_button']} ${styles['login-form--actions_button-register']}`}>REGISTER</Link>
            </div>
        </Form>
    </div>
}

export async function action({request, params}){
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    await toast.promise(signInWithEmailAndPassword(auth, email, password),{
        loading: 'Logging In...',
        error: (err) => `${err.toString()}`,
        success: `Logged In`
    });
    return redirect('/');
}

export const loader = ({params, request}) => {
    const id = 'ama';
    return {id};
}