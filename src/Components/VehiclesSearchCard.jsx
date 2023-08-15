import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const VehiclesSearchCard = (props) => {
    const{name, images, rent, trip} = props.vehiclesCategory;
    return (
        <div className=" mt-[1px]">
            <div className="body bg-sky-500 flex items-center justify-around gap-5 px-3 rounded-md text-white">
                <img src={images} alt="" className='w-20 h-16 rounded-full p-1' />
                <p className='text-md font-semibold'>{name}</p>
                <p className='text-md font-semibold'> <FontAwesomeIcon icon={faUsers} />  {trip}</p>
                <p className='text-md font-semibold'> {rent} $</p>
            </div>
        </div>
    );
};

export default VehiclesSearchCard;