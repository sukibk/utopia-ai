import styles from './Card80.module.css';

export const Card80 = (props) => {
    return <div className={`${styles.card} ${props.className}`}>
        {props.children}
    </div>
}