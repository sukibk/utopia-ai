import {MainNavigation} from "../components/Navigation/Main/MainNavigation.jsx";
import {Outlet, redirect} from "react-router";
import {auth} from "../firebase.js";

export const RootPage = () =>{
    return <>
        <MainNavigation />
        <Outlet />
    </>
}
