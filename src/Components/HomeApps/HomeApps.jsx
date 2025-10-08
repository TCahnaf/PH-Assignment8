import React from 'react';

import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import { useLoaderData } from 'react-router';

const HomeApps = () => {
    const data = useLoaderData();

    console.log(data)



    return (
        <div className='mt-20 px-4 max-w-7xl mx-auto'>
             
        <div className = " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
            {data.map(application => (
             <div className = "border-2 w-[300px] h-[435px] flex flex-col justify-center items-center rounded-lg bg-white shadow-md p-2 space-y-3">
                  <div>
                <img className='w-[256px] h-[256px]'
                 src = {application.image} alt="" />
            </div>

            <h3 className = "text-center h-[40px]">{application.title}</h3>

            <div className='flex justify-between w-full h-[30px] px-1  '>
                <div className = "flex gap-2 items-center bg-gray-100 rounded-lg p-2">
                    <img className='h-[20px]' src = {downloadImg} alt="" />
                    <p className = "text-green-700">{application.downloads}</p>
                </div>

                <div  className = "flex gap-2 items-center bg-[#D2D2D2] rounded-lg p-2 ">
                    <img className='h-[20px]' src= {ratingImg} alt="" />
                    <p className='text-amber-500'>{application.ratingAvg}</p>
                </div>
        
            </div>


           

            




            </div>))}

          
        </div>
        </div>
       
    );
};

export default HomeApps;