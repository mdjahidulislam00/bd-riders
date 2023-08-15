import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../src/FakeData/vehiclesListingData.json';
import VehiclesSearchCard from '../Components/VehiclesSearchCard';
import SearchFromValidation from '../Components/SearchFromValidation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationArrow, faLocationPin } from '@fortawesome/free-solid-svg-icons';

const DestinationPage = () => {

    const {vehicles} = useParams();
    const [inputFrom, setInputFrom] = useState({Date:' ', From:' ', To:' '})
    const [categories, setCategories] = useState([]);
    const [submittedFromData, setSubmittedFromData] = useState(false)
    const [searchFromError, setSearchFromError] = useState({Date: '', From: '', To: ''})


    //handelInput from
    const handelFrom = (e) => {
        setInputFrom({...inputFrom, [e.target.name] : e.target.value})
        
    }
    //handel Search 
    const handelDestinationSearch =(event)=>{
        event.preventDefault();
        setSearchFromError(SearchFromValidation(inputFrom))

        if(inputFrom.Date === ' ' || inputFrom.From === ' ' || inputFrom.To === ' '){
            setSubmittedFromData(false)
        } else{
            setCategories( FakeData.filter((ct) => ct.category === vehicles))
            setSubmittedFromData(true)
        }
    }  
    return (
        <div className=" flex justify-center gap-x-8 mt-10">
            <div className="destination-search-area p-4   rounded justify-center">
                {!submittedFromData && 
                    <form action="" className='border-2 p-5 bg-sky-200 rounded-md'>
                        <label htmlFor="date" className='font-bold'>Date:</label> <br />
                        <span className='text-red-500'>{searchFromError.Date}</span>
                        <input onChange={handelFrom} type="date" name='Date' className="rounded-md px-2 py-1" /> <br /> <br />
                        <label htmlFor="" className="font-semibold">Pick From: <span className='text-red-500'>{searchFromError.From}</span></label> <br />
                        <input onChange={handelFrom} type="text" name='From' size='30' className="p-2 rounded"/> <br />
                        <label htmlFor="" className="font-semibold">Pick To: <span className='text-red-500'>{searchFromError.To}</span></label> <br />
                        <input onChange={handelFrom} type="text" name='To' size='30' className="p-2 rounded" /> <br /> <br/>
                        <input onClick={handelDestinationSearch} type="Submit" value='Search' className="bg-red-400 text-white rounded text-center py-2 w-full cursor-pointer hover:bg-red-500"/><br /> <br />
                    </form>
                }
                {submittedFromData &&
                    <div className="search-result border-2 p-1 bg-gray-200  rounded-lg ">
                    <header className="header p-2 rounded-md">
                        <p className="text-md font-bold text-center bg-sky-400 text-white py-1 rounded-md">{inputFrom.Date}</p>
                        <p className="text-xl font-semibold text-rose-400 mb-2 text-center  rounded-md mt-2"> <span className="text-rose-400 text-2xl"><FontAwesomeIcon icon={faLocationArrow} /></span> {inputFrom.From}</p>
                        <p className="text-xl font-semibold text-sky-400 text-center rounded-md"> <span className="text-sky-400 text-2xl"><FontAwesomeIcon icon={faLocationPin} /></span> {inputFrom.To}</p>
                    </header>
                    <div className="body mt-2">
                        <p className='bg-sky-300 text-white text-center py-2 text-xl font-bold'>Route {vehicles} List</p>
                        {
                            categories.map(category => <VehiclesSearchCard key={category.id} vehiclesCategory={category}> </VehiclesSearchCard>)
                        }
                    </div>
                </div>
                }
            </div>
            <div className="mapping-area w-[600px] h-[508px] mb-5  border-4 border-bermuda rounded-lg">
                <div className="mapouter ">
                    <div className="mapouter relative text-right w-full h-[500px]" >
                        <div className="gmap_canvas overflow-hidden bg-none w-full h-[500px]">
                            <iframe className="gmap_iframe h-[600px] rounded-lg " width="100%"  src="https://maps.google.com/maps?width=800&amp;height=700&amp;hl=en&amp;q=Dhaka&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            <a href="https://connectionsgame.org/">Connections NYT</a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default DestinationPage;