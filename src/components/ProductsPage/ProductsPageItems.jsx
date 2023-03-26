import styles from './ProductsPageItems.module.css'
import {ImPencil, ImImages, ImVolumeMedium} from 'react-icons/im'
import {NavLink} from "react-router-dom";

export const ProductsPageItems = (props) => {

    return <div className={styles['products-page-items--wrapper']}>
        <div className={styles['products-page-items--main']}>
            <NavLink to={''} end className={({isActive}) => isActive ? `${styles['products-page-items--main_item']} ${styles.active}` : `${styles['products-page-items--main_item']}`}>
                <p><ImPencil /></p>
                <h2>Text Creation</h2>
            </NavLink>
            <NavLink to={'image-creation'}className={({isActive}) => isActive ? `${styles['products-page-items--main_item']} ${styles.active}` : `${styles['products-page-items--main_item']}`}>
                <p><ImImages /></p>
                <h2>Image Creation</h2>
            </NavLink>
            <NavLink to={'voice-creation'} className={({isActive}) => isActive ? `${styles['products-page-items--main_item']} ${styles.active}` : `${styles['products-page-items--main_item']}`}>
                <p><ImVolumeMedium /></p>
                <h2>Voice Creation</h2>
            </NavLink>
        </div>
    </div>
}