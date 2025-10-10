import React from 'react';

import { useLoaderData } from 'react-router';
import AppCards from '../../Pages/AppCards/AppCards';

const HomeApps = () => {
    const data = useLoaderData();

    console.log(data)



    return (
        <div className='mt-20 px-4 max-w-7xl mx-auto'>
             
        <div className = " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
            {data.map(application => <AppCards eachCard={application}></AppCards>)}

          
        </div>
        </div>
       
    );
};

export default HomeApps;