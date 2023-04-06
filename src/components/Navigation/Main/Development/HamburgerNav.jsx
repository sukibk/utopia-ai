import styles from "./Hamburger.module.css";
import {CSSTransition} from "react-transition-group";

export const HamburgerNav = (props) => {
    let lines = [
        {
        identifier: 'line--1',
        className: ''
        },
        {
        identifier: 'line--2',
        className: ''
        },
        {
        identifier: 'line--3',
        className: ''
        }
    ]


    const structuredLines = lines.map(line => {
        if(props.navExpanded){
        return {
            ...line,
            className: `${styles['main-navigation--switch--item']} ${styles[`${line.identifier}`]}`
        }}
        else return {
        ...line,
                className: `${styles['main-navigation--switch--item']}`
        }
    })

    return <CSSTransition mountOnEnter unmountOnExit in={props.show} classNames={{
                enter: '',
                enterActive: styles['main-navigation--fade__in'],
                exit: '',
                exitActive: styles['main-navigation--fade__out']
    }} timeout={50}>
        <button className={styles['main-navigation--switch']} onClick={props.onShow} tuype='button'>
            {structuredLines.map(({identifier, className}) => <div className={className} id={identifier} />)}
        </button>
    </CSSTransition>

    }

