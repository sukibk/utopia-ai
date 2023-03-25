import {Card80} from "../UI/Card80.jsx";
import {ProductsPageItem} from "./ProductsPageItem";
import {ProductsPageItems} from "./ProductsPageItems.jsx";
import styles from './ProductsPageContainer.module.css'

export const ProductsPageContainer = () => {
    return <div className={styles['products-container--wrapper']}>
        <Card80 className={styles['products-container--main']}>
            <ProductsPageItem className={styles.item}/>
            <ProductsPageItems className={styles.items}/>
        </Card80>
    </div>
}