import styles from './MobileBackDrop.module.css';
import {createPortal} from "react-dom";

const BackDrop = () => {
    return <div className={styles['backdrop-wrapper']} />
}

export const MobileBackDrop = (props) => {
    return <>
        {createPortal(<BackDrop />, document.getElementById('pop-ups'))}
    </>
};