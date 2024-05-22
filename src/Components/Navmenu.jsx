import React from 'react'

function Navmenu() {
  return (
    <div className="nav-menu flex justify-center p-2 shadow-lg space-x-5 mt-1" >
    <span className="category">
      ALL CATEGORIES
      <select className="select-style font-semibold cursor-pointer" ></select>
    </span>
    <span className="category hover:text-teal-600 cursor-pointer ">Cars</span>
    <span className="category  hover:text-teal-600 cursor-pointer">Motorcycles</span>
    <span className="category  hover:text-teal-600 cursor-pointer">Mobile Phones</span>
    <span className="category category-sub hover:text-teal-600 cursor-pointer">For Sale: Houses & Apartments</span>
    <span className="category hover:text-teal-600 cursor-pointer">Scooters</span>
    <span className="category hover:text-teal-600 cursor-pointer">Commercial & Other Vehicles</span>
    <span className="category category-sub hover:text-teal-600 cursor-pointer">For Rent: Houses & Apartments</span>
  </div>
  )
}

export default Navmenu
