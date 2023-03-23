import {MainNavigation} from "../components/MainNavigation";
import {Outlet} from "react-router";

export const RootPage = () =>{
    return <>
        <MainNavigation />
        <Outlet />
    </>
}