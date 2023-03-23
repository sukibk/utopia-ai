import styles from './TitleBox.module.css';

export const TitleBox = () => {
    return <div className={styles['title-box--container']}>
        <div className={styles['title-box--main']}>
            <h1>UTOPIA AI</h1>
            <p>Welcome to the world's first all-in-one AI
            locker available for students in more than
            80 countries</p>
        </div>
    </div>
}