import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import heroImg from '../../assets/hero.png'
import googleImg from '../../assets/google-play.png'
import appleImg from '../../assets/app-store.png'

const Hero = () => {

     const appStoreNavigation = () => {
        window.open( 'https://www.apple.com/app-store/');
    }
      const playStoreNavigation = () => {
        window.open( 'https://play.google.com/store/games');
    }


    return (
        <div className = "pt-20">
        <div className='space-y-4 max-w-[800px] mx-auto'>
            <h1 className='text-6xl text-center'>We Build<br/> 

                <span className = "gradient-font font-bold">Productive</span> Apps
            </h1>

            <p className='text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting<br/>.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className = "flex gap-4 items-center justify-center">
                <button onClick = {playStoreNavigation}  className=' flex justify-center w-[200px] h-[56px] gap-2 items-center bg-white p-2'> 
                   <img className='w-8 h-8' src= {googleImg} alt="" />
                    Google Play</button>
                <button onClick = {appStoreNavigation}  className=' w-[200px] h-[56px] flex justify-center gap-2 items-center bg-white p-2'  > <img className='w-8 h-8' src= {appleImg} alt="" />
                    App Store</button>
            </div>

            <div>
                <img src= {heroImg} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Hero;