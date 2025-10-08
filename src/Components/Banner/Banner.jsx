import React from 'react';


const Banner = () => {
    return (

       



            <div>

            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-16  text-center'>


                <h1 className = "text-4xl font-bold text-center">Trusted by Millions, Built for You</h1>
            

            <div className='flex  gap-8
            justify-center items-center mt-8'>

                <div className='flex flex-col space-y-3'>
                    <p>Total Downloads</p>
                    <h1 className = " font-bold text-4xl">29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='flex flex-col space-y-3'>
                    <p>Total Reviews</p>
                    <h1 className = " font-bold text-4xl ">906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div className='flex flex-col space-y-3'>
                    <p>Active Apps</p>
                    <h1 className = " font-bold text-4xl">132+</h1>
                    <p>31 more will Launch</p>
                </div>





            </div>
            </div>
            </div>


            
        
    );
};

export default Banner;