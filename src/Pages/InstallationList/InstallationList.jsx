import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utilities/DB';
import InstalledAppCards from '../InstalledAppCards/InstalledAppCards';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


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


    const lowHighSort = () => {

        const sortedByHigh = [...installed].sort((a,b) => a.size-b.size)
        setInstalled(sortedByHigh)



    }

     const highLowSort = () => {

        const sortedByHigh = [...installed].sort((a,b) => b.size-a.size)
        setInstalled(sortedByHigh)



    }
    const removeOperation = (obj) => {
        const storedAppData = getStoredApp();
        const updatedIds = storedAppData.filter(id => parseInt(id) !== obj.id)
        toast.success("App has been successfully removed")
         localStorage.setItem("installedApp", JSON.stringify(updatedIds))
         const updatedArray = installed.filter(app => app.id !== obj.id)
         setInstalled(updatedArray)
        
       
       



    }



    return (


        
        <div className='p-20 min-h-screen bg-[#E9E9E9]'>









            <div className='text-center space-y-2'><h1 className='text-4xl font-bold'>Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market Developed by us</p></div>

            
            
            <div className='flex justify-between items-center mt-20'>
                <div className='font-bold text-2xl'><h1>{installed.length} Apps Found</h1></div>
                <div>
                    <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={lowHighSort}>Low-High</a></li>
    <li><a onClick={highLowSort} >High-Low</a></li>
  </ul>
</div>
                </div>
            </div>

            <div className='mt-5'>
                {installed.map(app => <InstalledAppCards key={app.id} installedApp={app} removeOperation={removeOperation} ></InstalledAppCards>)}
            </div>
            <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default InstallationList;