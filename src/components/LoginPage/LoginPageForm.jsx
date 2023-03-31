import {Form, Link} from 'react-router-dom';
import styles from './LoginPageForm.module.css';
import {redirect, useLoaderData} from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase.js";
import toast, {Toaster} from "react-hot-toast";
import useCheckInput from "../../hooks/checkInput.js";

export const LoginPageForm = () => {
    const {value: email,
        hasError: emailHasError,
        inputIsValid: emailIsValid,
        inputHandler: emailInputHandler,
        blurHandler: emailBlurHandler,
        reset: emailReset} = useCheckInput(value => value.trim().includes('@'))

    const {value: password,
        hasError: passwordHasError,
        inputIsValid: passwordIsValid,
        inputHandler: passwordInputHandler,
        blurHandler: passwordBlurHandler,
        reset: passwordReset} = useCheckInput(value => value.trim().length >= 8)

    const enableRegister = emailIsValid && passwordIsValid;

   return <div className={styles['login-form--wrapper']}>
       <h1>ENTER THE UTOPIA</h1>
        <Form method='post' className={styles['login-form--form']}>
            <div className={styles['login-form-input--container']}>
                <input name='email' value={email} onChange={emailInputHandler} className={`${styles['login-form--form-input']} ${emailHasError && styles['login-form--input_invalid']}`} onBlur={emailBlurHandler} type = 'e-mail' placeholder='E-Mail'/>
                <input name='password' value={password} type = 'password' onChange={passwordInputHandler} className={`${styles['login-form--form-input']} ${passwordHasError && styles['login-form--input_invalid']}`} onBlur={passwordBlurHandler} placeholder='Password'/>
            </div>
            <div className={styles['login-form--actions']}>
                <button title='Enter E-Mail and Password' disabled={!enableRegister} className={styles['login-form--actions_button']}>LOG IN</button>
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