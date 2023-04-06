import styles from "./HomePageContainer.module.css";
import { TitleBox } from "./TitleBox.jsx";
import { Card40 } from "../UI/Card40.jsx";
import { RegisterForm } from "./RegisterForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { RegisteredHomePage } from "./RegisteredHomePage.jsx";
import { HomePageBackground } from "./HomePageBackground";
import { useEffect } from "react";
import {
  showHomeSquares,
  hideHomeSquares,
} from "../../store/backgroundSlice.js";

export const HomePageContainer = () => {
  const user = useSelector((store) => store.auth.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showHomeSquares()); // Setting className in App.jsx to 'main-home'
    // const newTheme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
    // document.body.setAttribute('data-theme', `${newTheme}`)

    return () => dispatch(hideHomeSquares()); // Setting className in App.jsx to 'main'
  }, []);

  return (
    <section className={styles["wrapper"]}>
      {
        <HomePageBackground /> // Displaying animated squares
      }
      <div className={styles["main--section"]}>
        <Card40>
          <TitleBox />
        </Card40>
        <Card40>
          {" "}
          {/* TO-DO: Make better protected routes */}
          {!user ? <RegisterForm /> : <RegisteredHomePage email={user.email} />}
        </Card40>
      </div>
    </section>
  );
};
