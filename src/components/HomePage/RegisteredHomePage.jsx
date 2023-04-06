import styles from "./RegisteredMainPage.module.css";
import { Link } from "react-router-dom";

// Is displayed when user is logged in / registered

export const RegisteredHomePage = (props) => {
  return (
    <section className={styles["logged-in--wrapper"]}>
      <div className={styles["logged-in--user_info"]}>
        <h1>Welcome</h1>
        <p>{props.email}</p>
      </div>
      <div className={styles["logged-in--actions"]}>
        <Link to={"logout"} className={styles["button"]}>
          LOG OUT
        </Link>
        <Link to={"profile"} className={styles["button"]}>
          GO TO PROFILE
        </Link>
      </div>
    </section>
  );
};
