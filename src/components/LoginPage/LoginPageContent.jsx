import styles from "./LoginPageContent.module.css";

export const LoginPageContent = () => {
  return (
    <div className={styles["login-content--wrapper"]}>
      <div className={styles["login-content--picture"]}>
        {/* TO DO: Put this in css */}
        <img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/news/features/2021/ai/ai-small-1920.jpg" />
      </div>
      <div className={styles["login-content--text"]}>
        <h2>Fun Fact</h2>
        {/* TO DO: Implement AI random facts */}
        <p>New fun fact fetched every time</p>
      </div>
    </div>
  );
};