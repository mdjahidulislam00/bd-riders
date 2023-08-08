import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../src/FakeData/vehiclesListingData.json';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import VehiclesSearchCard from '../Components/VehiclesSearchCard';

const DestinationPage = () => {
    const {vehicles} = useParams();
    console.log(vehicles)
    const [inputFrom, setInputFrom] = useState({Date:' ', From:' ', To:' '})
    const [categories, setCategories] = useState([]);


    //handelInput from
    const handelFrom = (e) => {
        setInputFrom({...inputFrom, [e.target.name] : e.target.value})
        
    }

    //handel Search 
    const handelDestinationSearch =(event)=>{
        event.preventDefault();
      const jh =  FakeData.filter((ct) => ct.category === vehicles)
      const jony = jh.map(nam => nam)
      console.log(jony)
        
    }
    
    return (
        <div className=" flex justify-center gap-x-8 mt-10">
            <div className="destination-search-area p-4  bg-gray-100 rounded justify-center">
                <form action="">
                    <label htmlFor="date" className='font-bold'>Date:</label> <br />
                    <input onChange={handelFrom} type="date" name='Date' className="rounded-md px-2 py-1" /> <br />
                    <label htmlFor="" className="font-semibold">Pick From:</label> <br />
                    <input onChange={handelFrom} type="text" name='From' size='30' className="p-2 rounded"/> <br />
                    <label htmlFor="" className="font-semibold">Pick To:</label> <br />
                    <input onChange={handelFrom} type="text" name='To' size='30' className="p-2 rounded" /> <br /> <br/>
                    <input onClick={handelDestinationSearch} type="Submit" value='Search' className="bg-red-400 text-white rounded text-center py-2 w-full cursor-pointer hover:bg-red-500"/><br /> <br />
                    <p> {"Journey Date:"+ inputFrom.Date}</p> <br />
                    <p>From: {inputFrom.From}- To: {inputFrom.To} by {vehicles}</p>
                </form>
                <VehiclesSearchCard />
            </div>
            <div className="mapping-area w-[600px] h-[508px] mb-5  border-4 border-gray-400 rounded-lg">
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