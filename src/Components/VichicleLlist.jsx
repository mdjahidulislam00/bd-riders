import React from 'react';
import bikeLogo from '../assets/images/Frame.png';
import carLogo from '../assets/images/Frame-2.png';
import busLogo from '../assets/images/Frame-1.png';
import trainLogo from '../assets/images/Group.png';


const VichicleLlist = () => {
    return (
        <div className='flex flex-row items-center justify-center space-x-4 pt-24 pb-52'>
            <div className="bike flex flex-col items-center bg-gray-100 w-48 h-40 p-4 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src={bikeLogo} alt="Bike" className=" w-32 h-24" />
                <div className="nameSection">
                    <p className='text-2xl font-bold'>Bike</p>
                </div>
            </div>
            <div className="bike flex flex-col items-center bg-gray-100 w-48 h-40 p-4 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src={carLogo} alt="Bike" className=" w-32 h-24" />
                <div className="nameSection">
                    <p className='text-2xl font-bold'>CAR</p>
                </div>
            </div>
            <div className="bike flex flex-col items-center bg-gray-100 w-48 h-40 p-4 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src={busLogo} alt="Bike" className=" w-32 h-24" />
                <div className="nameSection">
                    <p className='text-2xl font-bold'>BUS</p>
                </div>
            </div>
            <div className="bike flex flex-col items-center bg-gray-100 w-48 h-40 p-4 rounded-lg cursor-pointer hover:bg-gray-200">
                <img src={trainLogo} alt="Bike" className=" w-32 h-24" />
                <div className="nameSection">
                    <p className='text-2xl font-bold'>TRAIN</p>
                </div>
            </div>
        </div>
    );
};

export default VichicleLlist;