import {navigationLinks} from "./Navigation.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {NavItem} from "./NavItem.jsx";
import styles from './ModalNav.module.css'
import {HamburgerNav} from "./HamburgerNav";
import {createPortal} from "react-dom";


const Nav = (props) => {

    const navList = navigationLinks.map(({id, navigationLabel, navigateTo}) => (
        <CSSTransition  in={false} classNames={{
            enter: '',
            enterActive: styles['slide-in'],
            exit: '',
            exitActive: ''
        }} timeout={5}>
                <NavItem
                    navigateTo = {navigateTo}
                    navigationLabel = {navigationLabel}
                    isExpanded={true}
                    onNavigate = {props.onNavigate}
                />
            </CSSTransition>))

return <div className={styles['mobile-navigation--modal--wrapper']}>
    <TransitionGroup component='ul' className={styles['mobile-navigation--modal']}>
        {navList}
    </TransitionGroup>
    <div className={styles['close-button']}>
        <div className={`${styles['close-button--line']} ${styles['line1']}`}> </div>
        <div className={`${styles['close-button--line']} ${styles['line2']}`}> </div>
    </div>

</div>
}

export const ModalNav = (props) => {
    return <>
        {createPortal(<Nav onNavigate={props.closeNav}/>, document.getElementById('pop-ups'))}
    </>
};