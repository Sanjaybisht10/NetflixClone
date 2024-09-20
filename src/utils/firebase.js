// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUdTX_bFtdopLYSyjAkM8RFTAR8Op8fz0",
    authDomain: "netflix-3ae6d.firebaseapp.com",
    projectId: "netflix-3ae6d",
    storageBucket: "netflix-3ae6d.appspot.com",
    messagingSenderId: "348160606200",
    appId: "1:348160606200:web:7e4fc0733af2a008b3e00d",
    measurementId: "G-2TTPLM66D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
