import styles from "./MobileBackDrop.module.css";
import { createPortal } from "react-dom";

const BackDrop = (props) => {
  return <div onClick={props.onClose} className={styles["backdrop-wrapper"]} />;
};

export const MobileBackDrop = (props) => {
  return (
    <>
      {createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("pop-ups")
      )}
    </>
  );
};
