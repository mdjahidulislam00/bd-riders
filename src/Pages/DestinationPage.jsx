
const DestinationPage = () => {
    return (
        <div className=" flex justify-center gap-x-8 mt-10">
            <div className="destination-search-area p-4 h-56 bg-gray-100 rounded flex justify-center">
                <form action="">
                    <label htmlFor="" className="font-semibold">Pick From:</label> <br />
                    <input type="text" size='30' className="p-2 rounded"/> <br />
                    <label htmlFor="" className="font-semibold">Pick To:</label> <br />
                    <input type="text" size='30' className="p-2 rounded" /> <br /> <br/>
                    <input type="Submit" value='Search' className="bg-red-400 text-white rounded text-center py-2 w-full cursor-pointer"/>
                </form>
            </div>
            <div className="mapping-area w-[800px] h-[608px]  border-4 border-gray-400 rounded-lg">
                <div className="mapouter ">
                    <div className="mapouter relative text-right w-full h-[600px]" >
                        <div className="gmap_canvas overflow-hidden bg-none w-full h-[600px]">
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