import styles from './MainForm.module.css';
import {Form} from "react-router-dom";
import {useRef, useState} from "react";

export const MainForm = () =>{
    const [type, setType] = useState('text');

    return <div className={styles['main-form--container']}>
        <h2>REGISTER</h2>
        <Form className={styles['main-form--main']}>
            <div className={styles['main-form--input_container']}>
            <input placeholder='Your E-Mail' type='email' className={styles['main-form--input']}/>
            <input placeholder='Your Name' type='text' className={styles['main-form--input']}/>
            <input placeholder='Desired Password'  type='password' className={styles['main-form--input']}/>
            <input placeholder='DOB' onFocus={() => setType('date')} onBlur={() => setType('text')} type={type} id="date" className={styles['main-form--input_date-time']}/>
            </div>
            <div className={styles['main-form--input_actions']}>
                <button className={styles['main-form--input_actions__button']} type='submit'>REGISTER</button>
                <button className={styles['main-form--input_actions__button']}>GO TO LOGIN</button>
            </div>
        </Form>
    </div>
}