import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Hero from '../../Components/Hero/Hero';
import HomeApps from '../../Components/HomeApps/HomeApps';

const HomePage = () => {
    return (
        <div className='min-h-screen bg-[#D2D2D2]'>
            <Hero></Hero>
            <Banner></Banner>
                <div className = "space-y-4 mt-20">
                <h1 className = "text-center text-6xl font-bold">Trending Apps</h1>
            <p className = "text-center">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div>
                 <HomeApps></HomeApps>
            </div>

           
            
            
        </div>
    );
};

export default HomePage;