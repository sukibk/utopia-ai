import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./NavItem.module.css";

export const NavItem = (props) => {
  return (
    <NavLink
      to={`${props.navigateTo}`}
      className={({ isActive }) =>
        !isActive
          ? styles["main-navigation--item"]
          : !props.expand
          ? styles.active
          : styles["active__no-expand"]
      }
      onClick={() => {
        if (props.isExpanded) props.onNavigate();
      }}
    >
      {props.navigationLabel}
    </NavLink>
  );
};
