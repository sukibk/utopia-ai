import {ProductsPageContainer} from "../components/ProductsPage/ProductsPageContainer";
import {redirect, useNavigate} from "react-router";

export const ProductsPage = () => {
    return <ProductsPageContainer/>
}

export function loader({params}){
}