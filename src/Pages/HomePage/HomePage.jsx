import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Hero from '../../Components/Hero/Hero';
import HomeApps from '../../Components/HomeApps/HomeApps';
import { Link } from 'react-router';

const HomePage = () => {
    return (
        <div className='min-h-screen bg-[#E9E9E9]'>
            <Hero></Hero>
            <Banner></Banner>
                <div className = "space-y-4 mt-20">
                <h1 className = "text-center text-6xl font-bold">Trending Apps</h1>
            <p className = "text-center">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div>
                 <HomeApps></HomeApps>
            </div>


            <div className='max-w-[200px] mx-auto mt-20'>
                <button className=' h-[48px] w-[145px] ml-4 mb-20
                bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white p-2 rounded-md'><Link to = '/apps'>Show All</Link></button>
            </div>
            

           
            
            
        </div>
    );
};

export default HomePage;