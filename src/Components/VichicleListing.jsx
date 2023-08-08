import React from 'react';
import bikeLogo from '../assets/images/Frame.png';
import carLogo from '../assets/images/Frame-2.png';
import busLogo from '../assets/images/Frame-1.png';
import trainLogo from '../assets/images/Group.png';
import { Link } from 'react-router-dom';


const VichicleListing = () => {
    return (
        <div className='flex flex-row items-center justify-center space-x-4 pt-24 pb-52'>
           <Link to='/destination/bike'><div className="bike flex flex-col items-center bg-gray-100 w-48 h-40 p-4 rounded-lg cursor-pointer hover:bg-gray-200 hover:scale-110 duration-75 hover:border-2 border-yellow-400">
                <img src={bikeLogo} alt="Bike" className=" w-32 h-24" />
                <div className="nameSection">
                    <p className='text-2xl font-bold text-yellow-400 py-2'>Bike</p>
                </div>
                </div>
            </Link>
            <Link to='/destination/car'> <div className="bike flex flex-col items-center bg-gray-100 w-48 h-40 p-4 rounded-lg cursor-pointer hover:bg-gray-200 hover:scale-110 duration-75 hover:border-2 border-blue-600">
                <img src={carLogo} alt="Bike" className=" w-32 h-24" />
                <div className="nameSection">
                    <p className='text-2xl font-bold text-blue-600 py-2'>CAR</p>
                </div>
                </div>
            </Link>
            <Link to='/destination/bus'> <div className="bike flex flex-col items-center bg-gray-100 w-48 h-40 p-4 rounded-lg cursor-pointer hover:bg-gray-200 hover:scale-110 duration-75 hover:border-2 border-yellow-400">
                <img src={busLogo} alt="Bike" className=" w-32 h-24" />
                <div className="nameSection">
                    <p className='text-2xl font-bold text-yellow-400 py-2'>BUS</p>
                </div>
                </div>
            </Link>
            <Link to='/destination/train'>    <div className="bike flex flex-col items-center bg-gray-100 w-48 h-40 p-4 rounded-lg cursor-pointer hover:bg-gray-200 hover:scale-110 duration-75 hover:border-2 border-red-500">
                <img src={trainLogo} alt="Bike" className=" w-32 h-24" />
                <div className="nameSection">
                    <p className='text-2xl font-bold text-red-500 py-2'>TRAIN</p>
                </div>
                </div>
            </Link>
        </div>
    );
};

export default VichicleListing;