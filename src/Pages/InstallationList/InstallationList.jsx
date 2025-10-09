import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utilities/DB';

const InstallationList = () => {

    const data = useLoaderData();
    const [installed, setInstalled] = useState([])

    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedStoredBooks = storedAppData.map(app => parseInt(app));
        const InstalledApps = data.filter(app => convertedStoredBooks.includes(app.id))
        setInstalled(InstalledApps)
        console.log(installed)

    }, [])



    return (
        <div className='p-20'>

            <div className='text-center space-y-2'><h1 className='text-4xl font-bold'>Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market Developed by us</p></div>

            
            
            <div className='flex justify-between mt-20'>
                <div className='font-bold text-2xl'><h1>{installed.length} Apps Found</h1></div>
                <div><p>loading</p></div>
            </div>
            
        </div>
    );
};

export default InstallationList;