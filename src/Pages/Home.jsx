import React from 'react'
import Footer from '../Components/HomeComponent/Footer'
import Hero from '../Components/HomeComponent/Hero'
import Navbar from '../Components/HomeComponent/Navbar'
import SectionOne from '../Components/HomeComponent/SectionOne'
import SectionTwo from '../Components/HomeComponent/SectionTwo'
import "./Home.css"

const Home = () => {
  return (
    <>
       <div id="main">
           <Navbar/>
           <Hero />
           <SectionOne />
           <SectionTwo/>
           <Footer />
        </div> 
    </>
  )
}

export default Home