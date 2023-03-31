import styles from './RegisterForm.module.css';
import {Form, Link, useFetcher} from 'react-router-dom';
import {useState} from "react";
import useCheckInput from "../../hooks/checkInput.js";
import {useActionData, useLoaderData} from "react-router";

export const RegisterForm = (props) =>{
    const [type, setType] = useState('text');

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


    const formSubmitHandler = (e) => {
        e.preventDefault()
        if(enableRegister){
        props.onRegister(email, password);
        passwordReset();
        emailReset();
        }
        else alert('Nice Try :>')
    }

    return <div className={styles['main-form--container']}>
        <h2>REGISTER</h2>
        <Form onSubmit={formSubmitHandler} action={'/'} className={styles['main-form--main']}>
            <div className={styles['main-form--input_container']}>
            <input name='email' value={email} onChange={emailInputHandler} onBlur={emailBlurHandler} placeholder='Your E-Mail' type='email' className={`${styles['main-form--input']} ${emailHasError && styles['main-form--input_invalid']}`}/>
                {/*<input name='name' placeholder='Your Name' type='text' className={styles['main-form--input']}/>*/}
            <input name='password' value={password} onChange={passwordInputHandler} onBlur={passwordBlurHandler} placeholder='Desired Password'  type='password' className={`${styles['main-form--input']} ${passwordHasError && styles['main-form--input_invalid']}`}/>
                {/*<input name='dob' placeholder='DOB' onFocus={() => setType('date')} onBlur={() => setType('text')} type={type} id="date" className={styles['main-form--input_date-time']}/>*/}
            </div>
            <div className={styles['main-form--input_actions']}>
                <button disabled={!enableRegister} title='Enter E-Mail and Password' className={styles['main-form--input_actions__button']}>REGISTER</button>
                <Link to='login' className={styles['main-form--input_actions__button']}>GO TO LOGIN</Link>
            </div>
        </Form>
    </div>
}