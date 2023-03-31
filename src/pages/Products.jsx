import {ProductsPageContainer} from "../components/ProductsPage/ProductsPageContainer";
import {redirect, useLoaderData, useNavigate} from "react-router";
import {auth} from "../firebase.js";
import {setUser} from "../store/authSlice.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const ProductsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            dispatch(setUser({currentUser: user}))
        })

        return unsubscribe
    }, [])
    return <ProductsPageContainer/>
}

export function loader({params}){

}