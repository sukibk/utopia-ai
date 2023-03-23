import styles from './HomePageContainer.module.css';
import {TitleBox} from "./TitleBox";
import {Card} from "./UI/Card";
import {MainForm} from "./MainForm";

export const HomePageContainer = () =>{
    return <section className={styles['main--section']}>
        <Card>
            <TitleBox />
        </Card>
        <Card>
            <MainForm />
        </Card>
    </section>
}