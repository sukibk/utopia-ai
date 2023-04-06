import {NavLink} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import styles from './NavItem.module.css'

export const NavItem = (props) => {
    return (
        <NavLink
        to={`${props.navigateTo}`}
        className={({isActive}) => isActive ? styles.active : styles['main-navigation--item']}
        onClick={() => {if(props.isExpanded) props.onNavigate()}}>
            {props.navigationLabel}
        </NavLink>
    )

}