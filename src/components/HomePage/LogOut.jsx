import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import { redirect } from "react-router";

export async function loader() {
  await toast.promise(signOut(auth), {
    loading: "Logging Out...",
    success: "Logged Out!",
    error: "Error Occurred",
  });
  return redirect("/");
}
