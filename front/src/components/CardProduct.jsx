
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardProduct({handler, id, name, descrition, price}) {

  const navegate = useNavigate();

  const onAddProduct = (product) => {
    handler(product)
    navegate('/cart');
  }

  return (
    <div>
        <div className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{descrition}</p>
                <div className='card-div'>
                    <div className='card-price'> S/. {price}</div>
                    <button type='submit'
                      onClick={()=>onAddProduct({id, name, descrition, price})}
                    >Agregar</button>
                </div>
        </div>
    </div>
  )
}
