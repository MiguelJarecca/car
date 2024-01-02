import React, { useEffect, useState } from 'react'
import productService from '../services/ProductService';

export default function Product() {

    const [products, setProducts] = useState([]);

    useEffect(() =>
        {
            const data = productService();
            setProducts(data);
        },[])
        
        console.log('hola', products)
  return (
    <>
    <div className='product'>
      <h3 className='title'>Productos</h3>

        {products.map(prod => (

            <article className='product-container' key={prod.id}>
                <div className="card">
                    <h2 className="card-title">{prod.name}</h2>
                        <p className="card-text">{prod.descrition}</p>
                        <div className='card-div'>
                            <div className='card-price'>{prod.price}</div>
                            <button type='submit'>Agregar</button>
                        </div>
                </div>
            </article>
        ))}

    </div>  

    <div className="table">
        <h3>Carro de compras</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>nombre</td>
                    <td>precio</td>
                    <td>cantidad</td>
                    <td>total</td>
                    <td>eliminar</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">Total</td>
                    <td colSpan="2">1534</td>
                </tr>
            </tfoot>
        </table>
    </div>
    </>       
  )
}
