
import React from 'react'

export default function CardProduct({handler, id, name, descrition,price}) {

  console.log("pro",handler)

  const onAddProduct = (product) => {
    handler(product)
  }

  return (
    <div>
        <div className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{descrition}</p>
                <div className='card-div'>
                    <div className='card-price'>{price}</div>
                    <button type='submit'
                      onClick={()=>onAddProduct({id, name, descrition, price})}
                    >Agregar</button>
                </div>
        </div>
    </div>
  )
}
