import 'react';
import bgImages from '.././assets/images/Bg.png'
import VichicleListing from '../Components/VichicleListing';

const HomePage = () => {
    return (
        <>
            <div className="bg-contain bg-center" style={{backgroundImage: `url(${bgImages})`}}>
                <VichicleListing /> 
            </div>
        </>
    );
};

export default HomePage;