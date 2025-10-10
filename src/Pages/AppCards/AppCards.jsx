import React from 'react';

import { Link } from 'react-router';

const AppCards = ({eachCard}) => {
    return (
        <Link to = {`/appDetails/${eachCard.id}`}>
        <div className = "border-2 w-[300px] h-[435px] flex flex-col justify-center items-center rounded-lg bg-white shadow-md p-2 space-y-3">
                          <div>
                        <img className='w-[256px] h-[256px]'
                         src = {eachCard.image} alt="" />
                    </div>
        
                    <h3 className = "text-center h-[40px]">{eachCard.title}</h3>
        
                    <div className='flex justify-between w-full h-[30px] px-1  '>
                        <div className = "flex gap-2 items-center bg-gray-100 rounded-lg p-2">
                            <img className='h-[20px]' src = "/images/icon-downloads.png" alt="" />
                            <p className = "text-green-700">{eachCard.downloads}</p>
                        </div>
        
                        <div  className = "flex gap-2 items-center bg-[#D2D2D2] rounded-lg p-2 ">
                            <img className='h-[20px]' src= "/images/icon-ratings.png" alt="" />
                            <p className='text-amber-500'>{eachCard.ratingAvg}</p>
                        </div>
                    </div>
                    </div>
                    </Link>
    );
};

export default AppCards;