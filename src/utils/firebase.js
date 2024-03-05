// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIOHxghnq1MOD9NgkPSg2hP1QAjDTPuTg",
    authDomain: "netflixgpt-3d9c2.firebaseapp.com",
    projectId: "netflixgpt-3d9c2",
    storageBucket: "netflixgpt-3d9c2.appspot.com",
    messagingSenderId: "334579244829",
    appId: "1:334579244829:web:088c1b2caae11ee03c8bf4",
    measurementId: "G-LTE6H72005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();