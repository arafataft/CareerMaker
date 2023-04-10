import React from 'react';
import NavBar from './components/NavBar/NavBar';
import JobCategory from './components/JobCategory/JobCategory';
import { Outlet, useLoaderData } from 'react-router-dom'


function App() {
  return (
    <>
    <NavBar></NavBar>
    <Outlet />
    
    </>
  );
}

export default App;
