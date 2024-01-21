import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct';
import { ProductService } from '../services/ProductService';

export default function Product({handler}) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //Traemos los productos de product service del backend
    const getProducts = async() => {
        const prods = await ProductService();
        setProducts(prods);
        setIsLoading(false);
    } 

    useEffect(() =>
        {
            getProducts();
        },[])
        
  return (
    <>
    <div className='product'>

        {
            isLoading && <div> Cargando ...</div>
        }

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
