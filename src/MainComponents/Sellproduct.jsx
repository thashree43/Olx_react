import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import {db,storage} from  "../firebase/config"
import { collection,addDoc } from "firebase/firestore";
import {ref,getDownloadURL,uploadBytes} from "firebase/storage"
import olxLogo from '../assets/olx-logo.svg';
import { useNavigate } from 'react-router-dom';


function Sellproduct() {
    const [name,setName] = useState('')
    const [category,setCategory] =  useState('')
    const [price,setPrice] = useState(0)
    const [location,setLocation] = useState('')
    const [loading,setLoading] = useState(false)
    const [image,setImage] = useState(null)
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const handlesubmit =async (e)=>{
        e.preventDefault()
        setLoading(true)
        setError('')

        if (!name || !category || !price || !location) {
            setError('please fill all the fields')
            setLoading(false)
            return;
        }
        if (!image) {
            setError('please upload the image')
            setLoading(false)
            return;
        }
        try {
            const storageref = ref(storage,"image/" + image.name)
            await uploadBytes(storageref,image)
            const url = await getDownloadURL(storageref)
            const date = new Date()

            await addDoc(collection(db,'products'),{
                name:name,
                category:category,
                price:price,
                location:location,
                imageurl:url,
                createdAt:date.toString()
            })
            setName('')
            setCategory('')
            setPrice(0)
            setLocation('')
            setLoading(false)
            setImage(null)
            setError('')
            navigate('/')
        } catch (error) {
            setError('failed to upload the product')
            setLoading(false)
        }
    }

  return (
    <>
    <Navbar/>

    <div className="bg-gray-100 grid grid-cols-12 pb-5">
    <span className="col-span-4"></span>
    <div className="col-span-4 w-full m-10 bg-white rounded-xl shadow-lg">
      <div className="mx-auto text-center">
        <img className="p-2 w-24 mx-auto" src={olxLogo} alt="OLX Logo" />
        <h1 className="font-bold text-xl mt-6">Sell your Product</h1>

        <form onSubmit={handlesubmit} className="mt-6 space-y-8 ">
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="input-field border-black border-2 rounded-md m-2 p-3"
            type="text"
            placeholder="Product Name"
          />
          <input
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className="input-field  border-black border-2 rounded-md m-2 p-3"
            type="text"
            placeholder="Category"
          />
          <input
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="input-field  border-black border-2 rounded-md m-2 p-3"
            type="text"
            placeholder="Price"
          />
          <input
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            className="input-field  border-black border-2 rounded-md m-2 p-3"
            type="text"
            placeholder="Location"
          />

          <div className="flex justify-center">
            <img
              className="w-28 m"
              src={image ? URL.createObjectURL(image) : ''}
              alt=""
            />
          </div>

          <div>
            <label
              className="block rounded-lg cursor-pointer bg-gray-200 py-2 px-4 text-center"
              htmlFor="upload"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Upload Picture
            </label>
            <input
            onChange={(e)=>setImage(e.target.files[0])}
              id="upload"
              className="hidden"
              type="file"
              placeholder="Choose"
            />
          </div>
          <p className=" text-red-600">{}</p>
          <div className="p-4">
            <button
            type='submit'
              className="btn-submit py-2  px-4 bg-black text-white font-bold text-lg rounded-md"
                disabled={loading}
           >
              {loading ? 'Uploading' :'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
    <span className="col-span-4"></span>
  </div>
  </>
  )
}

export default Sellproduct
