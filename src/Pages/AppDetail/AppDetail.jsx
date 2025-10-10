import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppCards from '../AppCards/AppCards';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewsImg from '../../assets/icon-review.png';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Label } from 'recharts';
import { addToStoredApps } from '../../utilities/DB';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import oopsImage from '../../assets/oops.png'

const AppDetail = () => {
    const {id} = useParams();
    const applicationId = parseInt(id)
    console.log(applicationId)
    // const [filteredApp , setFilteredApp] = useState([])
    const data = useLoaderData();
    // console.log("here")
    // console.log(data)

    const targetedAPP = data.find(app => applicationId === app.id);
    // console.log(targetedAPP)
    // setFilteredApp(filteredArray)
    // console.log(filteredApp)

    if(!targetedAPP) {
      return (
        <div className="flex justify-center items-center h-screen
                        "><h1 className="text-4xl text-center">OOPS !! No APP was FOUND !!</h1>
                        <img src= {oopsImage} alt="" /></div>
      )

    }

    const {image, title, companyName, downloads, size, ratingAvg, reviews} = targetedAPP
    const reversedRatings = [...targetedAPP.ratings].reverse()

    const handleMarkAsInstalled = id => {

        addToStoredApps(id)

    }

 const [clickedInstall, setClickedInstall] = useState(false)

      const handleClick = () =>{
        setClickedInstall(true)
    }


    return (
        <div className='min-h-screen bg-[#E9E9E9] p-20'>
            
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
                        <button disabled = {clickedInstall} onClick={()=>{handleMarkAsInstalled(id)
                        handleClick()
                          
                            toast.success("App Has Installed Successfully")
                        }
                            
                        } className=' bg-gradient-to-r from-[#54CF68]  to-[#00827A] text-white font-bold rounded-md h-[52px] w-[239px]'>
                            {clickedInstall ? "Installed" : `Install Now (${size})MB`}</button>
                          

                        

                          
                    </div>

                
                </div>
           
         


           <div className='border-t-2 border-solid border-gray-300 max-w-[1440px]   ml-9 mt-20'></div>

           {/* Rechart Bar Graph */}

 <div className=" max-w-[1440px] h-[256px] mt-10 mx-auto ">

    <h1 className='ml-20 font-bold text-2xl'>Ratings</h1>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={reversedRatings}
      layout="vertical"
      margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
    >
     
      <XAxis type="number" axisLine = {false} tickLine={false}></XAxis>
     
      <YAxis   dataKey="name"
        type="category"
        axisLine = {false}
        tickLine ={false}>

      </YAxis>
      <Bar dataKey="count" fill="#FF8811" />
    </BarChart>
  </ResponsiveContainer>
</div>





            


 <div className='border-t-2 border-solid border-gray-300  max-w-[1440px] ml-9 mt-20'></div>

        

            <div className  = "space-y-2 ml-9 mt-5">
                <h1 className = "text-xl font-bold">Description</h1>
                <p>{targetedAPP.description}</p>
            </div>
            
<ToastContainer></ToastContainer>
        </div>
    );
};

export default AppDetail;