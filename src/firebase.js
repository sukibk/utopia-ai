import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    apiKey: "AIzaSyBjx0Z_fVNbbvBajd8mF-cLo48MrRG_Z_w",
    authDomain: "utopia-ai-dev.firebaseapp.com",
    databaseURL: "https://utopia-ai-dev-default-rtdb.firebaseio.com",
    projectId: "utopia-ai-dev",
    storageBucket: "utopia-ai-dev.appspot.com",
    messagingSenderId: "27973364145",
    appId: "1:27973364145:web:2d7a9aeb65f89a3030b590"
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);