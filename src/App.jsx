import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import JobCategory from './components/JobCategory/JobCategory';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';


function App() {
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <JobCategory></JobCategory>
    <FeaturedJobs></FeaturedJobs>
    </>
  );
}

export default App;
