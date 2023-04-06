import styles from "./RegisterForm.module.css";
import { Form, Link } from "react-router-dom";
import { useState } from "react";
import useCheckInput from "../../hooks/checkInput.js";
import { redirect } from "react-router";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

export const RegisterForm = (props) => {
  const [type, setType] = useState("text");

  // Check out ./hooks/checkInput.js for explanation about useCheckInput hook
  const {
    value: email,
    hasError: emailHasError,
    inputIsValid: emailIsValid,
    inputHandler: emailInputHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useCheckInput((value) => value.trim().includes("@"));

  const {
    value: password,
    hasError: passwordHasError,
    inputIsValid: passwordIsValid,
    inputHandler: passwordInputHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useCheckInput((value) => value.trim().length >= 8);

  const enableRegister = emailIsValid && passwordIsValid; // Enables/disables registering

  const formSubmitHandler = () => {
    if (enableRegister) {
      passwordReset();
      emailReset();
    } else alert("Nice Try :>"); // If somebody just enables button with inspect element
  };

  return (
    <div className={styles["main-form--container"]}>
      <h2>REGISTER</h2>
      <Form
        method="post"
        onSubmit={formSubmitHandler}
        className={styles["main-form--main"]}
      >
        <div className={styles["main-form--input_container"]}>
          <input
            name="email"
            value={email}
            onChange={emailInputHandler}
            onBlur={emailBlurHandler}
            placeholder="Your E-Mail"
            type="email"
            className={`${styles["main-form--input"]} ${
              emailHasError && styles["main-form--input_invalid"]
            }`}
          />
          {/*<input name='name' placeholder='Your Name' type='text' className={styles['main-form--input']}/>*/}
          <input
            name="password"
            value={password}
            onChange={passwordInputHandler}
            onBlur={passwordBlurHandler}
            placeholder="Desired Password"
            type="password"
            className={`${styles["main-form--input"]} ${
              passwordHasError && styles["main-form--input_invalid"]
            }`}
          />
          {/*<input name='dob' placeholder='DOB' onFocus={() => setType('date')} onBlur={() => setType('text')} type={type} id="date" className={styles['main-form--input_date-time']}/>*/}
        </div>
        <div className={styles["main-form--input_actions"]}>
          <button
            disabled={!enableRegister}
            title="Enter E-Mail and Password"
            className={styles["main-form--input_actions__button"]}
          >
            REGISTER
          </button>
          <Link
            to="login"
            className={styles["main-form--input_actions__button"]}
          >
            GO TO LOGIN
          </Link>
        </div>
      </Form>
    </div>
  );
};

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");
  await toast.promise(createUserWithEmailAndPassword(auth, email, password), {
    loading: "Registering...",
    error: (err) => `${err.toString()}`,
    success: `Registered`,
  });
  return redirect("/");
}
