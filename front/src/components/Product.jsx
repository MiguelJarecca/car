import React from 'react'

export default function Product() {

  return (
    <>
    <div className='product'>
      <h3 className='title'>Productos</h3>

      <article className='product-container'>
        <div className="card">
            <h2 className="card-title">Teclado Mecanico RGB</h2>
                <p className="card-text">Teclado mecanico con luces RGB switches cherry red</p>
                <div className='card-div'>
                    <div className='card-price'>s/. 100</div>
                    <button type='submit'>Agregar</button>
                </div>
        </div>

        <div className="card">
            <h2 className="card-title">Samsung Smart TV 55</h2>
                <p className="card-text">Teclado mecanico con luces RGB switches cherry red</p>
                <div className='card-div'>
                    <div className='card-price'>s/. 100</div>
                    <button type='submit'>Agregar</button>
                </div>
        </div>

        <div className="card">
            <h2 className="card-title">Audifono Bluetooth sony</h2>
                <p className="card-text">Teclado mecanico con luces RGB switches cherry red</p>
                <div className='card-div'>
                    <div className='card-price'>s/. 100</div>
                    <button type='submit'>Agregar</button>
                </div>
        </div>

        <div className="card">
            <h2 className="card-title">Memoria Corsair 8GB DDR5</h2>
                <p className="card-text">Teclado mecanico con luces RGB switches cherry red</p>
                <div className='card-div'>
                    <div className='card-price'>s/. 100</div>
                    <button type='submit'>Agregar</button>
                </div>
        </div>

        <div className="card">
            <h2 className="card-title">Asus Nvidia RTX</h2>
                <p className="card-text">Teclado mecanico con luces RGB switches cherry red</p>
                <div className='card-div'>
                    <div className='card-price'>s/. 100</div>
                    <button type='submit'>Agregar</button>
                </div>
        </div>

        <div className="card">
            <h2 className="card-title">CPU Intel Core i5</h2>
                <p className="card-text">Teclado mecanico con luces RGB switches cherry red</p>
                <div className='card-div'>
                    <div className='card-price'>s/. 100</div>
                    <button type='submit'>Agregar</button>
                </div>
        </div>

        <div className="card">
            <h2 className="card-title">Router</h2>
                <p className="card-text">Teclado mecanico con luces RGB switches cherry red</p>
                <div className='card-div'>
                    <div className='card-price'>s/. 100</div>
                    <button type='submit'>Agregar</button>
                </div>
        </div>
      </article>

    

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
