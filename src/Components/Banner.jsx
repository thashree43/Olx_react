import React from 'react'
import banner from '../assets/21.jpg'
import '../Pages/Navbar/banner.css'

function Banner() {
  return (
    <div className="banner  text-center">
      <img 
        src={banner} 
        alt="Banner" 
        className="banner-image"
      />
      <div className="banner-text">
        <h1>Welcome to Our Website</h1>
        <p>Enjoy your stay!</p>
      </div>
    </div>
  )
}

export default Banner
