import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Components/Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AppPage from "../Pages/AppPage/AppPage";
import AppDetail from "../Pages/AppDetail/AppDetail";


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
              loader: () => fetch('data2.json'),
             Component: AppDetail
               
            }
    ]
  },

 









])