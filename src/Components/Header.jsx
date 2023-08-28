import 'react';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { currentUser } from '../App';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const[logInUser, setLogInUser] = useContext(currentUser)
    
    //signIn current Users
    const[currentSignInUser, setCurrentSignInUser] = useState({})

    console.log(currentSignInUser)
    // // get users From Firebase
    // const auth = getAuth();
    //     onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/auth.user
    //         const uid = user.uid;
    //             setCurrentSignInUser(user)

    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    //     });
        const handelLogOut =()=>{
            const auth = getAuth();
                signOut(auth).then(() => {
                    setLogInUser(' ')
                // Sign-out successful.
                console.log('Sign-out successful.')
                }).catch((error) => {
                // An error happened.
                });
        }

    return (
        <div className='mx-auto flex flex-row justify-around py-8 bg-sky-300'>
            <div className="logoSection cursor-pointer">
               <Link to='/home'> <p className='text-4xl font-bold font-mono text-red-600 cursor-pointer'>Bangladeshi Riders</p></Link>
            </div>
            <div className="navSection">
                <ul className='flex flex-row space-x-8 items-center'>
                    <li className=' text-lg cursor-pointer hover:text-gray-500 duration-150'><NavLink to='/home'>Home</NavLink></li> 
                    <li className=' text-lg cursor-pointer hover:text-gray-500 duration-150'><NavLink to='/destination/bike'>Destination</NavLink></li> 
                    <li className=' text-lg cursor-pointer hover:text-gray-500 duration-150'><NavLink to='/blog'>Blogs</NavLink></li> 
                    <li className=' text-lg cursor-pointer hover:text-gray-500 duration-150'><NavLink to='/Contract'>Contract us</NavLink></li> 
                    <li className='text-md font-semibold text-red-500 border-2 rounded-md border-sky-100 px-2 py-1'> <span className='text-white text-xl'><FontAwesomeIcon icon={faUserCircle} /></span> {logInUser.email}</li>
                    <li onClick={handelLogOut} className=' text-lg  cursor-pointer px-7 py-2 bg-red-500 rounded-md text-white hover:bg-red-400 duration-150'>{currentSignInUser.email? 'Log out' : <NavLink to='/login'>Log In </NavLink>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;