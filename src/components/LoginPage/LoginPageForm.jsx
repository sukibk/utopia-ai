import {Form} from "react-router-dom";
import styles from './LoginPageForm.module.css';
export const LoginPageForm = () => {
   return <div className={styles['login-form--wrapper']}>
       <h1>ENTER THE UTOPIA</h1>
        <Form className={styles['login-form--form']}>
            <div className={styles['login-form-input--container']}>
                <input placeholder='E-Mail'/>
                <input placeholder='Password'/>
            </div>
            <div className={styles['login-form--actions']}>
                <button>LOG IN</button>
            </div>
        </Form>
    </div>
}