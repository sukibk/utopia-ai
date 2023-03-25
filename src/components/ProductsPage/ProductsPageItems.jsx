import styles from './ProductsPageItems.module.css'
import {ImPencil, ImImages, ImVolumeMedium} from 'react-icons/im'

export const ProductsPageItems = (props) => {
    return <div className={styles['products-page-items--wrapper']}>
        <div className={styles['products-page-items--main']}>
            <div className={styles['products-page-items--main_item']}>
                <p><ImPencil /></p>
                <h2>Text Creation</h2>
            </div>
            <div className={styles['products-page-items--main_item']}>
                <p><ImImages /></p>
                <h2>Image Making</h2>
            </div>
            <div className={styles['products-page-items--main_item']}>
                <p><ImVolumeMedium /></p>
                <h2>Voice Making</h2>
            </div>
        </div>
    </div>
}