import React from 'react'
import Navbar from '../Components/Navbar'
import Navmenu from '../Components/Navmenu'
import Footer from '../Components/Footer'
import Productlist from '../MainComponents/Productlist'



function Home() {
  return (
    <>
      <Navbar/>
      <Navmenu/>
      <Productlist/>
      <Footer/>
    </>
  )
}

export default Home
