import React from 'react';
import Header from "./Header";
import { useState, useRef } from 'react';
import { checkValidData } from "../utils/validate.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const handlerSubmitForm = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });

    }
    else {
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className="mx-auto right-0 left-0  p-12 bg-opacity-80 absolute w-3/12 my-28 bg-black text-white rounded-lg">
        <h1 className="text-2xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full rounded-lg bg-gray-800"
          />
        )}

        <input type="text"
          ref={email}
          placeholder="Email or phone number"
          className="p-2 my-3 w-full rounded-lg bg-gray-800"
        />

        <input type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-3 w-full rounded-lg bg-gray-800"
        />
        <p className="font-bold text-sm text-red-500 ">{errorMessage}</p>

        <button onClick={handlerSubmitForm}
          className="my-3 p-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?Sign up" : "Already registered?Sign In Now"}</p>
      </form>

    </div>
  );
}

export default Login;
