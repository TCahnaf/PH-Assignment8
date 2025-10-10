import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Components/Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AppPage from "../Pages/AppPage/AppPage";
import AppDetail from "../Pages/AppDetail/AppDetail";
import InstallationList from "../Pages/InstallationList/InstallationList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



export const router = createBrowserRouter([

{
    path: "/",
    Component: Root,
    children: [
        {
            index:true,
            loader:  async() => {
                const res = await fetch('/data1.json')
                return res.json()
                
                },
            Component:HomePage,
            
        },
         {
            path: "/apps",
            loader:  async() => {
                const res = await fetch('/data2.json')
                return res.json()
                
                },
            Component: AppPage
  },
           {
             path:"/appDetails/:id",
              loader: async() => {
                const res = await fetch('/data2.json')
                return res.json()
                
                },
                errorElement:<div className="flex justify-center items-center h-screen
                "><h1 className="text-4xl text-center">OOPS !! No APP was FOUND !!</h1>
                <img src="/images/oops.png"  alt="" /></div>,
             Component: AppDetail,
            
               
            },
            {
              path: "/installedList",
              loader:  async() => {
                const res = await fetch('/data2.json')
                return res.json()
                
                },
              Component:InstallationList

            },
            {
              path: '*',
              Component: ErrorPage
            }
      
          
    ],
   
  },


 









])