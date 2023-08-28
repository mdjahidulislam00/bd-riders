import { useContext, useState } from 'react'
import faceBookIcon from '../assets/images/facebookicon.png'
import googleIcon from '../assets/images/googleicon.png'
import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebase.Config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import FromValidation from './FromValidation';
import { currentUser } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
function SignUp() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isNewUser, setIsNewUser] = useState(true);
    const [userInfo, setUserInfo] = useState({
            name: ' ',
            email: ' ',
            password: ' ' 
    })

    //use navigator and useLocation
        const navigate = useNavigate();
        const location = useLocation();
        const {from} = location.state || {from: {pathname: ''}}
        console.log(from);

    //from error
    const [fromError, setFromError] = useState({name: '', email: '', password: ''});
    //firebase error
    const[firebaseError, setFirebaseError] = useState()

    console.log(firebaseError)

    //Context api
    const[logInUser, setLogInUser] = useContext(currentUser);

    //handelInput from signIn from
    const handelInput = (e) =>{
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }
    //handel submit form
    const handelSubmit=(event)=>{
        event.preventDefault();
        setFromError(FromValidation(userInfo, isNewUser));

        //create with firebase authentication
        if(isNewUser){
            const auth = getAuth(app);
                createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate('/home')
                    setLogInUser(user)
                    setIsLoggedIn(true)
                    console.log(user)
                    console.log('successfully create')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                        setFirebaseError(errorMessage)
                    // ..
                    console.log(errorCode, errorMessage)
                });
        }else{
            //Log in with firebase authentication
            const auth = getAuth(app);
                signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate('/home')
                    setLogInUser(user);
                    setUserInfo(' ')
                    setIsLoggedIn(true)
                    console.log(user)
                    console.log('successfully login')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFirebaseError(errorMessage)
                    console.log(errorCode, errorMessage)
                });
        }
    } 
    //FacebookLog In
    const handelFacebookLogIn =() =>{
        const facebookProvider = new FacebookAuthProvider();
        const auth = getAuth(app);
            signInWithPopup(auth, facebookProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                navigate('/destination/:vehicles')
                setLogInUser(user)
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                    setFirebaseError(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });

    }
    //GoogleLog 
    const handelGoogleLogIn = () => {
        const googleProvider = new GoogleAuthProvider();

        const auth = getAuth(app);
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate('/home')
                setLogInUser(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseError(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });   
    }
  return (
    <div className="flex flex-col items-center">
        <div className="flex-col w-[410px] mt-10 mx-auto items-center border-2 rounded-md">
            <h2 className='text-center text-2xl font-bold pb-6 pt-2'>{isNewUser? 'Create an Account' : 'Log In'}</h2>
            <form className='px-8' onSubmit={handelSubmit}>
                {isNewUser && <input onChange={handelInput} className="w-full px-1 py-1 border-b-[1px] border-gray-300 focus:border-blue-400 focus:ring-0 focus:outline-none text-md text-gray-600 " placeholder='name' type="text" name="name" id="name" />} <br />
                {fromError.name && <span className="text-red-500 p-0">{fromError.name}</span> }<br />
                <input onChange={handelInput} className="w-full px-1 py-1 border-b-[1px] border-gray-300 focus:border-blue-400 focus:ring-0 focus:outline-none text-md text-gray-600" placeholder='Email' type="email" name="email" id="email" /> <br />
                {fromError.email && <span className="text-red-500 p-0">{fromError.email}</span> }<br />  
                <input onChange={handelInput} className="w-full px-1 py-1 border-b-[1px] border-gray-300 focus:border-blue-400 focus:ring-0 focus:outline-none text-md text-gray-600" placeholder='Password' type="password" name="password" id="password" /> <br />
                {fromError.password && <span className="text-red-500 p-0">{fromError.password}</span> }<br />  <br />
                {firebaseError ? <span className='text-red-500 font-semibold p-2 '>{firebaseError}</span> : ' ' }
                <button className="w-full rounded-lg bg-red-400 py-2 mb-2 cursor-pointer hover:bg-red-500 duration-150 text-white font-bold" type="submit" name="Submit" id="signInButton">{isNewUser ?'Create Account': 'Log in'}</button>
                <p className='py-2 text-center'>Already Have an account? <span className='text-red-400 cursor-pointer font-semibold' onClick={()=>setIsNewUser(!isNewUser)}>{isNewUser ? 'Login': 'signUp'}</span></p>
            </form>
        </div>
        <div className='py-2 w-[450px]'>
            <div className='text-center text-red-400 font-bold pb-2'> <p>Or</p></div>
            <div onClick={handelGoogleLogIn} className='flex justify-start gap-16 items-center border-2 rounded-full px-2 py-1 mx-6 cursor-pointer mb-2 hover:border-red-200'>
                <img src={googleIcon} alt="FacebookIcon" className="w-8 h-8 rounded-full" />
                <p className='font-semibold'>Continue With Google</p>
            </div>
            <div onClick={handelFacebookLogIn} className='flex justify-start gap-16 items-center border-2 rounded-full px-2 py-1 mx-6 cursor-pointer mb-2 hover:border-red-200'>
                <img src={faceBookIcon} alt="FacebookIcon" className="w-8 h-8 rounded-full" />
                <p className='font-semibold'>Continue With Facebook</p>
            </div>
        </div>
    </div>
  )
}

export default SignUp