import  'react';
import facebookIcon from '../assets/images/facebookicon.png';
import twitterIcon from '../assets/images/twitterIcon.png';
import instagramIcon from '../assets/images//instagramIcon.jpeg';

const Footer = () => {
    return (
        <div className="bg-sky-200 ">
            <div className="footerBody flex justify-evenly pt-5">
                <address>
                    <h1 className="text-2xl font-semibold">Address</h1>
                    <p>Natore sadar, Natore</p>
                    <p>bdridesupprot@gmail.com</p>
                    <p>01303-744200</p>
                </address>
                <div className="customer-signIn">
                    <p className='text-sm pb-1 cursor-pointer hover:text-sky-800 duration-150 '>Customer signIn</p>
                    <p className='text-sm pb-1 cursor-pointer hover:text-sky-800 duration-150'>Terms of service</p>
                    <p className='text-sm pb-1 cursor-pointer hover:text-sky-800 duration-150'>Privacy Policy</p>
                    <p className='text-sm cursor-pointer hover:text-sky-800 duration-150'>Customer FAQ</p>
                </div>
                <div className="partnerSingIn">
                    <p className='text-sm pb-1 cursor-pointer hover:text-sky-800 duration-150 '>Partner sign In</p>
                    <p className='text-sm pb-1 cursor-pointer hover:text-sky-800 duration-150 '>Partner Terms of service</p>
                    <p className='text-sm pb-1 cursor-pointer hover:text-sky-800 duration-150 '>Partner FAQ</p>
                </div>
                <div className="socialMediaSection">
                    <h2 className='text-xl mb-5'>With Social Network</h2>
                    <div className="socialIcon flex items-center justify-around">
                        <img src={facebookIcon} alt="" className="w-10 h-10 cursor-pointer hover:scale-125 duration-150" />
                        <img src={twitterIcon} alt="" className="w-10 h-10 cursor-pointer hover:scale-125 duration-150" />
                        <img src={instagramIcon} alt="" className="w-10 h-10 cursor-pointer hover:scale-125 duration-150" />
                    </div>
                </div>
            </div>
            <div className="copyRightText bg-sky-200 text-center p-2">
                <p className='text-sm '>2023 © All rights are reserved by bd-rider.com</p>
            </div> 
        </div>
    );
};

export default Footer;