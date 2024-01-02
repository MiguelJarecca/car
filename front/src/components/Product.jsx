import React, { useEffect, useState } from 'react'
import productService from '../services/ProductService';
import CardProduct from './CardProduct';

export default function Product({handler}) {

    const [products, setProducts] = useState([]);

    useEffect(() =>
        {
            const data = productService();
            setProducts(data);
        },[])
        
  return (
    <>
    <div className='product'>
      <h3 className='title'>Productos</h3>

        {products.map(prod => (

            <article className='product-container' key={prod.id}>
                <CardProduct 
                    handler={handler}
                    id={prod.id}
                    name={prod.name}
                    description={prod.description}
                    price={prod.price}
                />
            </article>
        ))}

    </div>  
    </>       
  )
}
