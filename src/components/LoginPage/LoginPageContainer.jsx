import styles from "./LoginPageContainer.module.css";
import { Card40 } from "../UI/Card40.jsx";
import { LoginPageForm } from "./LoginPageForm";
import { LoginPageContent } from "./LoginPageContent";

export const LoginPageContainer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["login-page--wrapper"]}>
        <Card40>
          <LoginPageForm />
        </Card40>
        <Card40>
          <LoginPageContent />
        </Card40>
      </div>
    </div>
  );
};