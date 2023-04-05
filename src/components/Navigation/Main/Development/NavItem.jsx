import {NavLink} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

export const NaviItem = (props) => {
    return <CSSTransition>
        <NavLink></NavLink>
    </CSSTransition>
}