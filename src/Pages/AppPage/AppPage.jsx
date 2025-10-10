import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCards from '../AppCards/AppCards';
import searchIcon from '../../assets/loupe.png'
import { useState } from 'react';
import appNotFoundImg from '../../assets/App-Error.png'

const AppPage = () => {

const data = useLoaderData();
const [appsFiltered, setAppsFiltered] = useState([]);
const [isFiltered, setIsFiltered] = useState(false);
const [appNotFound, setAppNotFound] = useState(false)
const [showLoaderAnimation, setShowLoaderAnimation] = useState(false)

const handleSearch = e => {
    const userSearch = e.target.value;
    // console.log(userSearch)
    setShowLoaderAnimation(true)
    setTimeout(() => {
    const filtered =data.filter(app => app.title.toLowerCase().includes(userSearch.toLowerCase()))
    filtered.length === 0 ? setAppNotFound(true):setAppNotFound(false)
    userSearch.length > 0 ? setIsFiltered(true):setIsFiltered(false)
     setAppsFiltered(filtered);
     setShowLoaderAnimation(false)
    // console.log(appsFiltered)
    }, 500)
}

    return (
        <div className=' p-20 space-y-9 min-h-screen bg-[#E9E9E9]'>


            <div className  = {`${isFiltered? 'hidden':''} space-y-5 `}>                   
                <h1 className='text-4xl font-bold text-center'>Our All Applications</h1>
            <p className = "text-[#627382] text-center">Explore All Apps on the Marker developed by us. We code for millions</p>
            </div> 

            <div className = "flex justify-between items-center px-10">

                <div className = "font-bold text-2xl">({!isFiltered?data.length:appsFiltered.length}) Apps Found</div>
                <div className = "relative ">
                    <img className = "h-6 w-6 absolute left-3 top-1/2 -translate-y-1/2" src= {searchIcon} alt="" />

                    <input className = "border border-gray-300 rounded-md pl-10 w-[400px] h-[48px]" type="text" placeholder='search Apps' name = "search-bar" 
                    onChange={handleSearch} />
                </div>
                </div>

                


            

              {showLoaderAnimation && ((<div className='flex justify-center items-center h-96'><span className="loading loading-bars loading-xl"></span></div>))}


            <div className={`${isFiltered? 'hidden':''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center  `}
            >

                

                {data.map(eachCard => <AppCards key={eachCard.id} eachCard = {eachCard}></AppCards>)}
                
                
                </div> 
                

                <div className= {`${!isFiltered? 'hidden':''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center  `}>
                    {appsFiltered.map(eachCard => <AppCards key={eachCard.id} eachCard={eachCard}></AppCards>)}
                </div>

             

             {appNotFound && ( <div className='flex flex-col justify-center space-y-7 mx-auto max-w-[800px]'>
                <div className = "flex justify-center">
                    <img src = {appNotFoundImg} alt="" />
                </div>
                <h1 className = "text-6xl font-bold text-center">OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] text-center'>The App you are requesting is not found on our system. please try other apps.</p>
                <button><Link className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-2 rounded-md w-[150px] h-[48px]' to = "/">Go Back!</Link></button>
                
            
             </div>

             )}
            
        </div>
    );
};

export default AppPage;