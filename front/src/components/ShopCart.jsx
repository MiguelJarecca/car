
import React from 'react'

export default function ShopCart({cartItems}) {

  return (
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
                {cartItems.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.product.price * item.quantity}</td>
                        <td>eliminar</td>
                    </tr>
                ))}

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">Total</td>
                    <td colSpan="2">1534</td>
                </tr>
            </tfoot>
        </table>
    </div>   
  )
}
