import styles from './ProductPageItem.module.css'

export const ProductsPageItem = (props) => {
    return <div className={styles['products-page-item--wrapper']}>
        <div className={styles['products-page-item--main']}>
        <div className={styles['products-page-item--main_header']}>
            <h1>TEXT</h1>
            <h3>CREATION</h3>
        </div>
        <div className={styles['products-page-item--main_description']}>
            <img src='https://monkeylearn.com/static/6b2ad32d58b2ceece93e816b52b20d05/An_Introduction_to_NLP_in_AI-Thumbnail.png' height='200px'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles['products-page-item--main_actions']}>
            <button>LEARN MORE</button>
            <button>BUY TOKENS</button>
        </div>
        </div>
    </div>
}