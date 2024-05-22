import React, { useContext, useEffect, useState } from 'react'
import {PostContext} from '../Context/PostContext'
import {db} from '../firebase/config'
import {collection,getDocs,query,where} from 'firebase/firestore'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function ProductDetail({selected}) {
    const { productdetails } = useContext(PostContext);
    const [userDetails, setUserDetails] = useState({});
  
    const getUser = async () => {
      if (productdetails?.userId) {
        const q = query(collection(db, "users"), where("id", "==", productdetails.userId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUserDetails(doc.data());
        });
      }
    };
  
    useEffect(() => {
      getUser();
    }, [productdetails]);
  
    if (!productdetails) {
      return <p>Product does not exist</p>;
    }
  return (
    <>
    <Navbar/>
    <div className="container mx-auto flex flex-wrap p-5 min-h-screen">
      <div className="w-full md:w-1/2 p-5 h-screen">
        <img className="object-cover w-full h-full" src={productdetails.imageurl} alt={productdetails.name} />
      </div>
      <div className="w-full md:w-1/2 p-5">
        <div className="bg-gray-50 shadow-lg p-5 rounded-lg">
          <h1 className="text-4xl font-bold">{productdetails.name}</h1>
          <h2>Category: {productdetails.category}</h2>
          <p>Price: Rs. {productdetails.price}</p>
          <p>Location: {productdetails.location}</p>
        </div>
        <div className="bg-gray-50 shadow-lg p-5 rounded-lg mt-5">
          <p className="text-xl underline mb-1">Seller Details</p>
          <h1 className="text-lg">Seller name: <span className="font-medium">{userDetails.username}</span></h1>
          <h1>Phone: <span className="font-medium">{userDetails.mobile}</span></h1>
        </div>
        <div className="bg-gray-50 shadow-lg p-5 rounded-lg mt-5">
          <h1 className="text-4xl font-bold text-center py-5">₹ {productdetails.price}</h1>
          <button className="bg-green-500 text-white w-full rounded-lg font-semibold py-3">
            Buy Product
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetail
