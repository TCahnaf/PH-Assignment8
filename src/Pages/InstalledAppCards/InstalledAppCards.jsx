import React, {  } from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'

const InstalledAppCards = ({installedApp, removeOperation}) => {

   

  
    return (
        <div>

            <div className='flex justify-between p-4 border-2 border-white rounded-lg shadow-md bg-white items-center mb-6 '>
                <div className='flex gap-2'>
                    <img className='h-[80px] w-[80px]' src= {installedApp.image} alt="" />
                    <div className='flex flex-col space-y-2'>
                        <h3 className='font-bold'>{installedApp.title}</h3>
                        <div className='flex gap-4'>
                            <div className = "flex gap-2">
                                <img className='h-[20px]' src = {downloadImg} alt="" />
                                <p className = "text-green-700">{installedApp.downloads}</p>
                            </div>
                            <div  className = "flex gap-2">
                                <img className='h-[20px]' src= {ratingImg} alt="" />
                                 <p className='text-amber-500'>{installedApp.ratingAvg}</p>

                            </div>
                            <p>{installedApp.size} MB</p>
                        </div>
                    </div>
                </div>
                <button onClick={()=> {removeOperation(installedApp) 

                }} className=' p-2 bg-gradient-to-r from-[#54CF68]  to-[#00827A] text-white font-bold rounded-md h-[52px] w-[100px]'>Uninstall</button>
            </div>
            
        </div>
    );
};

export default InstalledAppCards;