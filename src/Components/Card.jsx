import React from 'react';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PostContext } from '../Context/PostContext';

function Card({ product }) {
  const navigate = useNavigate();
  const { setProductdetails } = useContext(PostContext);

  const handleClick = (product) => {
    setProductdetails(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="mt-32 pl-8 ml-20 max-w-sm rounded overflow-hidden shadow-lg" onClick={() => handleClick(product)}>
      <img
        src={product.imageurl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-xl">{product.name}</h2>
          <FaHeart className="text-black-500 cursor-pointer" />
        </div>
        <p className="text-gray-700 text-base">Category: {product.category}</p>
        <p className="text-gray-700 text-base">Price: ₹{product.price}/-</p>
        <p className="text-gray-700 text-base">Location: {product.location}</p>
        <p className="text-gray-700 text-base">Date: {product.createdAt}</p>
      </div>
    </div>
  );
}

export default Card;
