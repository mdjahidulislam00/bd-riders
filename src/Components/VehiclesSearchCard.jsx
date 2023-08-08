import React from 'react';

const VehiclesSearchCard = () => {
    return (
        <div className="">
            <header className="header bg-red-400 p-2 rounded-md">
                <p className="text-xl font-semibold text-white">Destination From</p>
                <p className="text-xl font-semibold text-white">Destination To</p>
                <p className="text-md font-semibold text-gray-300">Date: 12/12/2023</p>
            </header>
            <div className="body bg-300">
                <h1>Vehicles List:</h1>
                <div className="Vehicles-List-Card">
                    
                </div>
            </div>
        </div>
    );
};

export default VehiclesSearchCard;