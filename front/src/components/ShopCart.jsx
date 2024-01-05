
import React, { useEffect, useState } from 'react'
import { CalculatorTotal } from '../services/ProductService';
import { useNavigate } from 'react-router-dom'


export default function ShopCart({handleDelete, cartItems}) {

    const [total, setTotal] = useState(0);
    const navegate = useNavigate();

    const onDeleteItem = (id) =>  {
        handleDelete(id)
    }
    useEffect(() => {
        setTotal(
            CalculatorTotal(cartItems)
        );
    },[cartItems])

    const onCatalog = () => {
        navegate('/catalog');
    }

  return (
    <div className="table-container">
        <table className='table'>
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
                {cartItems.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
                        <td>S/. {item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>S/. {item.product.price * item.quantity}</td>
                        <td><button 
                                className='button-delete' 
                                onClick={()=>onDeleteItem(item.product.id)}>Eliminar
                            </button></td>
                    </tr>
                ))}

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">Total</td>
                    <td colSpan="2">S/. {total}</td>
                </tr>
            </tfoot>
        </table>

        <button className='button-cart' onClick={onCatalog}>Seguir comprando</button>                

    </div>   
  )
}
