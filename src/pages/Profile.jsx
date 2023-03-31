import {ProfilePageContainer} from "../components/ProfilePage/ProfilePageContainer";
import {auth} from "../firebase.js";
import {setUser} from "../store/authSlice.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const Profile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            dispatch(setUser({currentUser: user}))
        })

        return unsubscribe
    }, [])

    return <ProfilePageContainer/>
}