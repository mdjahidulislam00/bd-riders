import React, { useState } from 'react'
import faceBookIcon from '../assets/images/facebookicon.png'
import googleIcon from '../assets/images/googleicon.png'

import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebase.Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
function SignUp() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [newUser, setNewUser] = useState(true);
    const [userInfo, setUserInfo] = useState({
            name: ' ',
            email: ' ',
            password: '',
            isLoggedIn: false
    })

    //handelInput from signIn from
    const handelInput = (e) =>{
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }

    //Firebase Authentication
    const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

  return (
    <div className="flex flex-col items-center">
        <div className="flex-col w-[410px] mt-10 mx-auto items-center border-2 rounded-md">
            <h1>{userInfo.name + userInfo.email + userInfo.password}</h1>
            <h2 className='text-center text-2xl font-bold pb-6 pt-2'>{newUser? 'Create an Account' : 'Log In'}</h2>
            <div className='px-8'>
                {newUser && <input onChange={handelInput} className="w-full py-1 mb-4 border-b-[1px] border-gray-300 focus:border-red-400 focus:ring-0 focus:outline-none text-md text-gray-600 " placeholder='name' type="text" name="name" id="name" />} 
                <input onChange={handelInput} className="w-full py-1 mb-4 border-b-[1px] border-gray-300 focus:border-red-400 focus:ring-0 focus:outline-none text-md text-gray-600" placeholder='Email' type="email" name="email" id="email" />  
                <input onChange={handelInput} className="w-full py-1 mb-4 border-b-[1px] border-gray-300 focus:border-red-400 focus:ring-0 focus:outline-none text-md text-gray-600" placeholder='Password' type="password" name="password" id="password" /> 
                {newUser && <input className="w-full py-1 mb-4 border-b-[1px] border-gray-300 focus:border-red-400 focus:ring-0 focus:outline-none text-md text-gray-600" placeholder='Confirm Password' type="password" name="ConfirmPassword" id="ConfirmPassword" />}
                <button className="w-full rounded-lg bg-red-400 py-2 mb-2 cursor-pointer hover:bg-red-500 duration-150 text-white font-bold" type="submit" name="Submit" id="name">{newUser ?'Create Account': 'Log in'}</button>
                <p className='py-2 text-center'>Already Have an account? <span className='text-red-400 cursor-pointer font-semibold' onClick={()=>setNewUser(!newUser)}>{newUser ? 'Login': 'signUp'}</span></p>
            </div>
        </div>
        <div className='py-2 w-[450px]'>
            <div className='text-center text-red-400 font-bold pb-2'> <p>Or</p></div>
            <div className='flex justify-start gap-16 items-center border-2 rounded-full px-2 py-1 mx-6 cursor-pointer mb-2 hover:border-red-200'>
                <img src={faceBookIcon} alt="FacebookIcon" className="w-8 h-8 rounded-full" />
                <p className='font-semibold'>Continue With Facebook</p>
            </div>
            <div className='flex justify-start gap-16 items-center border-2 rounded-full px-2 py-1 mx-6 cursor-pointer mb-2 hover:border-red-200'>
                <img src={googleIcon} alt="FacebookIcon" className="w-8 h-8 rounded-full" />
                <p className='font-semibold'>Continue With Google</p>
            </div>
        </div>
    </div>
  )
}

export default SignUp