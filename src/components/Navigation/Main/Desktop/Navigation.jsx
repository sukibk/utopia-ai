import styles from "./Navigation.module.css";
import { NavItem } from "../utils/NavItem.jsx";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import { HamburgerNav } from "../utils/HamburgerNav.jsx";
import { ThemeSwitcher } from "../../../utils/ThemeSwitcher";

// TO DO: Secured Routes
export const navigationLinks = [
  {
    id: "home",
    navigationLabel: "Home",
    navigateTo: "/",
    protected: "",
  },
  // {
  //   id: "login",
  //   navigationLabel: "Login",
  //   navigateTo: "login",
  //   protected: "",
  // },
  {
    id: "products",
    navigationLabel: "Products",
    navigateTo: "products",
    protected: "",
  },
  {
    id: "profile",
    navigationLabel: "Profile",
    navigateTo: "profile",
    protected: "",
  },
];

export const Navigation = () => {
  // Used to determine when to use smaller screen display
  const [showHamburger, setShowHamburger] = useState(false);

  const [expandMenu, setExpandMenu] = useState(true); // Used to expand and retrieve nav when

  // Controls navigation states
  const handleResize = () => {
    let width = window.innerWidth;
    if (width <= 1024) {
      setShowHamburger(true);
      setExpandMenu(false);
    } else {
      setShowHamburger(false);
      setExpandMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.innerWidth < 1024) {
      // Initialize state based on screen size on load
      setShowHamburger(true);
      setExpandMenu(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CSSTransition
      in={expandMenu}
      classNames={{
        enter: "",
        enterActive: styles["main-navigation--slide__down"],
        exit: "",
        exitActive: styles["main-navigation--slide__up"],
      }}
      timeout={{ enter: 400, exit: 400 }}
    >
      <header className={styles["main-navigation--wrapper"]}>
        <div className={styles["main-navigation-left"]}>
          <h2>utopiaai.com</h2>
        </div>
        <section className={styles["main-navigation--inner"]}>
          <nav className={styles["main-navigation"]}>
            <CSSTransition
              in={expandMenu}
              classNames={{
                enter: "",
                enterActive: styles["main-navigation--fade__in"],
                exit: "",
                exitActive: styles["main-navigation--fade__out"],
              }}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 400, exit: 100 }}
            >
              {/* Desktop (big) */}
              <ul className={styles["main-navigation--menu"]}>
                {navigationLinks.map(({ id, navigationLabel, navigateTo }) => (
                  <li
                    className={"main-navigation--item-wrapper"}
                    key={navigationLabel}
                  >
                    <NavItem
                      navigateTo={navigateTo}
                      navigationLabel={navigationLabel}
                      isExpanded={showHamburger}
                      onNavigate={() =>
                        setExpandMenu((prevState) => !prevState)
                      }
                    />
                  </li>
                ))}
              </ul>
            </CSSTransition>
            {/* Desktop (medium) */}
            {showHamburger && (
              <div className={styles["main-navigation--small-screen--actions"]}>
                <HamburgerNav
                  show={showHamburger}
                  navExpanded={expandMenu}
                  onShow={() => setExpandMenu((prevState) => !prevState)}
                />
                <ThemeSwitcher />
              </div>
            )}
          </nav>
        </section>
        {/* Desktop (big and medium)*/}
        <div className={styles["main-navigation__right"]}>
          <div className={styles["main-navigation__right--inner"]}>
            <div className={"main-navigation--item-wrapper"}>
              <NavItem
                expand={true}
                navigateTo={"login"}
                navigationLabel={"Login"}
                isExpanded={showHamburger}
                onNavigate={() => setExpandMenu((prevState) => prevState)}
              />
            </div>
            {/* Desktop (medium) */}
            {!showHamburger && (
              <div className={styles["main-navigation--item--theme-switcher"]}>
                <ThemeSwitcher />
              </div>
            )}
          </div>
        </div>
      </header>
    </CSSTransition>
  );
};
