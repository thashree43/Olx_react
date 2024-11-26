import React from 'react'
import Navbar from '../Components/Navbar'
import Navmenu from '../Components/Navmenu'
import Footer from '../Components/Footer'
import Productlist from '../MainComponents/Productlist'
import Banner from '../Components/Banner'



function Home() {
  return (
    <>
      <Navbar/>
      <Navmenu/>
      <Banner/>
      <Productlist/>
      <Footer/>
    </>
  )
}

export default Home
