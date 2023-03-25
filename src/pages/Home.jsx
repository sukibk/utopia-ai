import {HomePageContainer} from "../components/HomePage/HomePageContainer.jsx";
import {auth} from "../firebase.js";
import {redirect} from "react-router";
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setUser, removeUser} from "../store/authSlice.js";

export const HomePage = () => {
    const user = useSelector(state=> state.auth.currentUser)
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            dispatch(setUser({currentUser: user}))
        })

        return unsubscribe
    }, [])

    console.log(user);

    return <>
        <HomePageContainer/>
    </>
}

    export async function action({request, params}){
    console.log('executing')
    const data = Object.fromEntries(await request.formData());
    await auth.createUserWithEmailAndPassword(data.email, data.password);
    const g = {a: 1}
    return g;
}

export const loader = ({params, request}) => {
    console.log('aaaadsd')
    const g = {a: 1}
    return g;
}

// export function loader({params, request}){
//     const listen = onAuthStateChanged(auth, (user) => {
//         if(user){
//             setAuthUser(user)
//         }
//         else{
//             setAuthUser(null)
//         }
//     })
// }