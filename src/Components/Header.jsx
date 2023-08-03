import 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mx-auto flex flex-row justify-around py-8 bg-sky-200'>
            <div className="logoSection cursor-pointer">
                <p className='text-3xl font-bold font-mono text-red-400 shadow-md cursor-pointer'>Bangladeshi Riders</p>
            </div>
            <div className="navSection">
                <ul className='flex flex-row space-x-8 items-center'>
                    <li className=' text-lg cursor-pointer hover:text-gray-500 duration-150'><NavLink to='/home'>Home</NavLink></li> 
                    <li className=' text-lg cursor-pointer hover:text-gray-500 duration-150'><NavLink to='/destination'>Destination</NavLink></li> 
                    <li className=' text-lg cursor-pointer hover:text-gray-500 duration-150'><NavLink to='/blog'>Blogs</NavLink></li> 
                    <li className=' text-lg cursor-pointer hover:text-gray-500 duration-150'><NavLink to='/Contract'>Contract us</NavLink></li> 
                    <li className=' text-lg  cursor-pointer px-7 py-2 bg-red-500 rounded-md text-white hover:bg-red-400 duration-150'> <NavLink to='/login'>Log in</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;