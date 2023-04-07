import styles from "./ProfilePageContainer.module.css";
import { MainNavigation } from "../Navigation/Main/deprecated/MainNavigation.jsx";
import { ProfileNavigation } from "../Navigation/Profile/ProfileNavigation";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

export const ProfilePageContainer = () => {
  return (
    <div className={styles["profile-page-container--wrapper"]}>
      <div className={styles["context"]}>
        <div className={styles.navigation}>
          <ProfileNavigation />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
