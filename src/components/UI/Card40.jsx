import styles from './Card40.module.css';

export const Card40 = (props) => {
    return <div className={`${styles.card} ${props.className}`}>
        {props.children}
    </div>
}