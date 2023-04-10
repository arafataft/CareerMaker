import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import JobCategory from './components/JobCategory/JobCategory';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './components/JobDetails/JobDetails';

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
        loader:()=>fetch('data1.json')
      }
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
