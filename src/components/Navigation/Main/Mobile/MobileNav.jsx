import styles from "./MobileNav.module.css";
import { HamburgerNav } from "../utils/HamburgerNav.jsx";
import { useState } from "react";
import { ModalNav } from "./ModalNav.jsx";
import { CSSTransition } from "react-transition-group";
import { MobileBackDrop } from "./MobileBackDrop.jsx";
import { ThemeSwitcher } from "../../../utils/ThemeSwitcher";

export const MobileNav = () => {
  // Used to control whether modal with backdrop will be shown or not
  const [navIsOpened, setNavIsOpened] = useState(false);

  return (
    <header className={styles["mobile-navigation--wrapper"]}>
      <CSSTransition
        in={!navIsOpened}
        timeout={500}
        classNames={{
          enter: "",
          enterActive: styles["slide-down"],
          exit: "",
          exitActive: styles["slide-up"],
        }}
      >
        <section className={styles["mobile-navigation"]}>
          <HamburgerNav
            show={true} // Always displayed
            onShow={() => {
              setNavIsOpened((prevValue) => !prevValue);
            }}
          />
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={navIsOpened}
            timeout={{ enter: 500, exit: 500 }}
            classNames={{
              enter: "",
              enterActive: styles["slide-in"],
              exit: "",
              exitActive: styles["slide-out"],
            }}
          >
            <ModalNav
              in={navIsOpened}
              closeNav={() => {
                setNavIsOpened((prevValue) => !prevValue);
              }}
            />
          </CSSTransition>
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={navIsOpened}
            timeout={{ enter: 500, exit: 500 }}
            classNames={{
              enter: "",
              enterActive: styles["slide-in__reverse"],
              exit: "",
              exitActive: styles["slide-out__reverse"],
            }}
          >
            <MobileBackDrop
              onClose={() => setNavIsOpened((prevValue) => !prevValue)}
            />
          </CSSTransition>
        </section>
      </CSSTransition>
      <section className={styles["theme-switcher"]}>
        <ThemeSwitcher />
      </section>
    </header>
  );
};
