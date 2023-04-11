import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <NavBar></NavBar>
    <Outlet />
    <Footer/>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
