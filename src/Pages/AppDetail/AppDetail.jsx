import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppCards from '../AppCards/AppCards';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewsImg from '../../assets/icon-review.png'

const AppDetail = () => {
    const {id} = useParams();
    const applicationId = parseInt(id)
    console.log(applicationId)
    // const [filteredApp , setFilteredApp] = useState([])
    const data = useLoaderData();
    console.log("here")
    console.log(data)

    const targetedAPP = data.find(app => applicationId === app.id);
    console.log(targetedAPP)
    // setFilteredApp(filteredArray)
    // console.log(filteredApp)

    const {image, title, companyName, downloads, size, ratingAvg, reviews} = targetedAPP

    return (
        <div>
            
                <div className = "flex gap-6 mt-20 ml-9">
                    <div>
                    <img className='w-[256px] h-[256px]' src= {image} alt="" />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <div className='space-y-3'>
                             <h1 className = "font-bold text-2xl">{title}</h1>
                           <p> Developed by <span className = "gradient-font">{companyName}</span></p>
                           <div className='border-t-2 border-solid border-gray-300  w-[1050px]'></div>
                        </div>

                        <div className='flex gap-6 mt-8'>
                        <div className='space-y-3'>
                            <img src= {downloadImg} alt="" />
                            <p>Downloads</p>
                            <h1 className='font-bold text-2xl'>{downloads}</h1>
                        </div>
                         <div className='space-y-3'>
                            <img src= {ratingImg} alt="" />
                            <p>Average Ratings</p>
                            <h1 className='font-bold text-2xl'>{ratingAvg}</h1>
                        </div>
                         <div className='space-y-3'>
                            <img src= {reviewsImg} alt="" />
                            <p> Total Reviews</p>
                            <h1 className='font-bold text-2xl'>{reviews}</h1>
                        </div>
                        </div>
                        <button className=' bg-gradient-to-r from-[#54CF68]  to-[#00827A] text-white font-bold rounded-xl h-[52px] w-[239px]'>
                            Install Now ({size}MB)</button>
                          

                        

                          
                    </div>

                
                </div>
           
         


           <div className='border-t-2 border-solid border-gray-300  w-full ml-9 mt-20'></div>
            <div>
                {/* reachart */}
            </div>




            <div className  = "space-y- ml-9">
                <h1 className = "text-xl">Description</h1>
                <p>{targetedAPP.description}</p>
            </div>
            

        </div>
    );
};

export default AppDetail;