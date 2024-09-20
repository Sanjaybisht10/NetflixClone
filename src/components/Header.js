import React, { useEffect } from 'react';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import {addUser,removeUser} from "../utils/userSlice"
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGE } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const Navigate=useNavigate();
  const dispatch=useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      Navigate('/')
    }).catch((error) => {
      Navigate('/error')
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        Navigate("/browse")

      } else {
        dispatch(removeUser());
        Navigate("/")
      }
    });


  }, [])

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e)=>{
   dispatch(changeLanguage(e.target.value));
  }

  return (
    
      <div className="absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-32"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo" />

        <div className="flex p-1">
          {showGptSearch &&(<select className="p-1 m-1 bg-gray-800 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.value}</option>))}
          </select>)}
          <button className="py-1 px-2 mx-2 my-1 rounded-lg bg-purple-800 text-white"
          onClick={handleGptSearchClick}>
          {showGptSearch ? "Homepage" :"GPT Search"}
            </button>
          <img
            className="w-9 h-9"
            src="https://tse2.mm.bing.net/th?id=OIP.RE_WgzICByGEGmvLtanb6QHaHa&pid=Api&P=0&h=180"
            alt="logo" />
          <button onClick={handleSignOut} className="font-bold bg-slate-200 w-15 h-7 flex m-2">signout</button>
        </div>
          
      

      </div>
      
  
    
  );
}

export default Header;
