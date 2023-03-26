import styles from './ProductsPageItem.module.css'

export const ProductsPageItem = (props) => {
    return <div className={styles['products-page-item--wrapper']}>
        <div className={styles['products-page-item--main']}>
        <div className={styles['products-page-item--main_header']}>
            <h1>{props.item.title}</h1>
            <h3>{props.item.titleDescription}</h3>
        </div>
        <div className={styles['products-page-item--main_description']}>
            <img src={props.item.url} alt={`${props.item.id} picture can't be loaded`}/>
            <p>{props.item.text}</p>
        </div>
        <div className={styles['products-page-item--main_actions']}>
            <button>LEARN MORE</button>
            <button>BUY TOKENS</button>
        </div>
        </div>
    </div>
}