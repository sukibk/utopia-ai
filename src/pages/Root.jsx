import { Outlet } from "react-router";
import { auth } from "../firebase.js";
import { Navigation } from "../components/Navigation/Main/Development/Navigation.jsx";
import { MobileNav } from "../components/Navigation/Main/Development/MobileNav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../store/authSlice.js";

export const RootPage = () => {
  const dispatch = useDispatch();

  // Used for monitoring if there is currently active user on the website
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch(setUser({ currentUser: user })); // Utilizes redux to supply current user to the whole application
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {/*Sizing will decide which navigation will be used*/}
      <Navigation /> {/* Mid/Big Screen */}
      <MobileNav /> {/* Small Screen */}
      {/*----------------*/}
      <Outlet />
    </>
  );
};
