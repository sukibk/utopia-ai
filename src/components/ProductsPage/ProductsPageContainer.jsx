import {Card80} from "../UI/Card80.jsx";
import {ProductsPageItem} from "./ProductsPageItem";
import {ProductsPageItems} from "./ProductsPageItems.jsx";
import styles from './ProductsPageContainer.module.css'
import {json, Outlet} from "react-router";
import {useRouteLoaderData} from "react-router";
import {useSelector} from "react-redux";
import {useNavigation} from "react-router";

export const ProductsPageContainer = () => {
    const item = useRouteLoaderData('propId');
    const url = useSelector(store => store.url.url);
    const navigation = useNavigation();
    let className = '';

    if(navigation.state === 'loading') className = styles.blur;
    else className = '';

    return <div className={styles['products-container--wrapper']}>
        <Card80 className={styles['products-container--main']}>
            <div className={styles['products-container--main_background']} style={{background:`url(${url}) center center`}}/>
            <Outlet style={{color: 'red'}} classname={className} context={item}/>
            <ProductsPageItems className={styles.items}/>
        </Card80>
    </div>
}

export async function loader() {
    const response = await fetch('https://utopia-ai-dev-default-rtdb.firebaseio.com/products/text-creation.json');
    const data = await response;
    return data;
}