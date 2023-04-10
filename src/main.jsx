import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Banner from './components/Banner/Banner';
import JobCategory from './components/JobCategory/JobCategory';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

const router= createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element: <><Banner/> 
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
        </>,
      },
      {
        path:'/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('/data1.json')
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>,
        
      },
    
      {
        path:'blog',
        element:<Blog></Blog>,
        
      }
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
