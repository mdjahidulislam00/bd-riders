import 'react';
import bgImages from '.././assets/images/Bg.png'
import Header from '../Components/Header';
import VichicleLlist from '../Components/VichicleLlist';
import MainFooter from '../Components/MainFooter';

const Home = () => {
    return (
        <>
            <div className="bg-contain bg-center" style={{backgroundImage: `url(${bgImages})`}}>
                <Header />
                <VichicleLlist /> 
            </div>
            <MainFooter />
        </>
    );
};

export default Home;