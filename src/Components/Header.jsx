import 'react';
import logo from '../assets/images/Urban Riders.png';

const Header = () => {
    return (
        <div className='mx-auto flex flex-row justify-around py-8'>
            <div className="logoSection cursor-pointer">
                <img src={logo} alt="Urban Riders" className='w-48 h-8' />
            </div>
            <div className="navSection">
                <ul className='flex flex-row space-x-8 items-center'>
                    <li className='font-semibold text-lg cursor-pointer hover:text-gray-500 duration-150'><a href="#">Home</a></li>
                    <li className='font-semibold text-lg cursor-pointer hover:text-gray-500 duration-150'><a href="#">Destination</a></li>
                    <li className='font-semibold text-lg cursor-pointer hover:text-gray-500 duration-150'><a href="#">Blogs</a></li>
                    <li className='font-semibold text-lg cursor-pointer hover:text-gray-500 duration-150'><a href="#">Contract</a></li>
                    <li className='font-semibold text-lg  cursor-pointer px-7 py-2 bg-red-500 rounded-md text-white hover:bg-red-400 duration-150'><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;