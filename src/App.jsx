import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <NavBar></NavBar>
    <Outlet />
    <Footer/>
    
    </>
  );
}

export default App;
