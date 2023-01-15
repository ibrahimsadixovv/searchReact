import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  axios from 'axios'
import './style.css'
function ProductPage() {

  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    const id = params.id

    axios.get("https://northwind.vercel.app/api/products/" + id).then(response => {
      setProduct(response.data)
    })

  })

  return (
    <div className='openCard'>
       <h2> {product.name} </h2>
       <p className='price'> {product.unitPrice} $ </p>
       <p> {product.quantityPerUnit} </p>

       <div className='closeButton'>
      
       <Link to="/"   class="closeBtn" href="#"> Close  </Link> 

     
     </div>
    </div>
  );
}


  
 

export default ProductPage;