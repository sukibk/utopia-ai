import { navigationLinks } from "../Desktop/Navigation.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavItem } from "../utils/NavItem.jsx";
import styles from "./ModalNav.module.css";
import { createPortal } from "react-dom";

const Nav = (props) => {
  // Will be changed after 'Secure Routes' update
  const navList = navigationLinks.map(({ id, navigationLabel, navigateTo }) => (
    <CSSTransition
      in={props.in} // Not 100% sure what would happen if set to true (TO DO: Test)
      classNames={{
        enter: "",
        enterActive: styles["slide-in"],
        exit: "",
        exitActive: "",
      }}
      timeout={500}
    >
      <NavItem
        navigateTo={navigateTo}
        navigationLabel={navigationLabel}
        isExpanded={true}
        onNavigate={props.onNavigate}
      />
    </CSSTransition>
  ));

  return (
    <div className={styles["mobile-navigation--modal--wrapper"]}>
      <TransitionGroup // Might change this because it has no function
        component="ul"
        className={styles["mobile-navigation--modal"]}
      >
        {navList}
      </TransitionGroup>
      <div className={styles["close-button"]} onMouseUp={props.onNavigate}>
        <CSSTransition
          in={props.in}
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: "",
            enterActive: styles["slide-in__line1"],
            exit: styles["slide-out__line1"],
            exitActive: "",
          }}
          timeout={{ start: 200, exit: 1000 }}
        >
          <div className={`${styles["close-button--line"]} ${styles["line1"]}`}>
            {" "}
          </div>
        </CSSTransition>
        <CSSTransition
          in={props.in}
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: "",
            enterActive: styles["slide-in__line2"],
            exit: styles["slide-out__line2"],
            exitActive: "",
          }}
          timeout={{ start: 200, exit: 500 }}
        >
          <div className={`${styles["close-button--line"]} ${styles["line2"]}`}>
            {" "}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export const ModalNav = (props) => {
  return (
    <>
      {createPortal(
        <Nav in={props.in} onNavigate={props.closeNav} />,
        document.getElementById("pop-ups")
      )}
    </>
  );
};
