import React, { useState, useEffect } from "react"



function Products(){

  const [products, setProducts] = useState([])


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>{
      console.table(data)
      setProducts(data)
      
    })
    .catch((err)=>{
      console.error(err)
    })
  },[])

  return (
    <div className="products">

    {
      products.map((product,index)=>{
        return(
          <div className="product" key={index}>
            <div className="image-wrapper">
              <img className='p-image' src={product.image} alt="product" />
              <h2 className="p-title">{product.title}</h2>
              <h3>{product.rating.count} </h3>
            </div>
          </div>
        )

      })
    }

    </div>
  )

  
  
}

export default Products