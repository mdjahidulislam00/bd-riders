import React from 'react';
import faceBookIcon from '../assets/images/facebookicon.png'
import googleIcon from '../assets/images/googleicon.png'


function SingInPage() {
  return (
    <div className="flex-col w-96 mt-10 mx-auto items-center border-2 rounded-md">
        <h2 className='text-center text-2xl font-bold p-4'>Create an Account</h2>
        <div className='px-8'>
            <input className="w-full rounded-lg p-1 mb-0.5 focus:border-white focus:ring-1 focus:outline-white text-md text-gray-600" placeholder='Name' type="text" name="name" id="name" /> <hr /> <br />
            <input className="w-full rounded-lg p-1 mb-0.5 focus:border-white focus:ring-1 focus:outline-white text-md text-gray-600" placeholder='Email' type="email" name="name" id="name" /> <hr /> <br />
            <input className="w-full rounded-lg p-1 mb-0.5 focus:border-white focus:ring-1 focus:outline-white text-md text-gray-600" placeholder='Password' type="Password" name="name" id="name" /> <hr /> <br />
            <input className="w-full rounded-lg p-1 mb-0.5 focus:border-white focus:ring-1 focus:outline-white text-md text-gray-600" placeholder='Confirm Password' type="password" name="Password" id="name" /> <hr /> <br />
            <input className="w-full rounded-lg bg-red-400 py-2 mb-2 cursor-pointer hover:bg-red-500 duration-150 text-white font-bold" type="submit" name="submit" id="name" />
            <p className='py-2 text-center'>Already Have an account? <span className='text-red-400 cursor-pointer font-semibold'>Login</span></p>
        </div>
        <div className='py-2'>
            <div className='text-center text-red-400 font-bold pb-2'> <p>Or</p></div>
            <div className='flex gap-x-8 items-center border-2 rounded-full px-5 py-1 mx-6 cursor-pointer mb-2 hover:border-red-200'>
                <img src={faceBookIcon} alt="FacebookIcon" className="w-8 h-8" />
                <p className='font-semibold'>Continue With Facebook</p>
            </div>
            <div className='flex gap-x-8 items-center border-2 rounded-full px-5 py-1 mx-6 cursor-pointer hover:border-red-200'>
                <img src={googleIcon} alt="FacebookIcon" className="w-8 h-8" />
                <p className='font-semibold'>Continue With Google</p>
            </div>
        </div>
    </div>
  )
}

export default SingInPage