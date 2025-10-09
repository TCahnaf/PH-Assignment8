import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Components/Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AppPage from "../Pages/AppPage/AppPage";
import AppDetail from "../Pages/AppDetail/AppDetail";
import InstallationList from "../Pages/InstallationList/InstallationList";


export const router = createBrowserRouter([

{
    path: "/",
    Component: Root,
    children: [
        {
            index:true,
            loader: () => fetch('data1.json'),
            Component:HomePage
        },
         {
            path: "/apps",
            loader: ()=> fetch('data2.json'),
            Component: AppPage
  },
           {
             path:"/appDetails/:id",
              loader: async() => {
                const res = await fetch('/data2.json')
                return res.json()
                
                },
             Component: AppDetail
               
            },
            {
              path: "/installedList",
              loader: ()=> fetch('data2.json'),
              Component:InstallationList

            }
    ]
  },

 









])