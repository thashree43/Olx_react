import React, { useEffect, useState } from 'react'
import {collection,getDocs} from 'firebase/firestore'
import {db} from '../firebase/config'
import Card from '../Components/Card'

function Productlist() {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')

    useEffect(()=>{
        const addproduct =async ()=>{
            try {
                const querySnapshot = await getDocs(collection(db,"products"))
                const productData = querySnapshot.docs.map(doc=>({
                    id:doc.id,
                    ...doc.data()
                }))
                setProducts(productData)
                setLoading(false)
            } catch (error) {
                setError('theproduct is not found in the card')
                setLoading(false)
            }
        }
        addproduct()
    },[])
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map(product=>(
       <Card key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Productlist
