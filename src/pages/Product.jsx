import {ProductsPageItem} from "../components/ProductsPage/ProductsPageItem";
import {useLoaderData, useNavigation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {setUrl} from "../store/urlSlice.js";

export const ProductPage = (props) => {
    const item = useLoaderData();
    const url = useSelector(state => state.url.url)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setUrl({url: item.url}))
    })

    console.log(url)

    return <ProductsPageItem item={item}/>
}

export async function loader({request, params}){
    let productId = params.productId;
    if(params.productId === undefined) productId = 'text-creation'
    const response = await fetch(`https://utopia-ai-dev-default-rtdb.firebaseio.com/products/${productId}.json`);
    const data = await response;
    return data;
}