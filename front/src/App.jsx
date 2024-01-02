import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import ShopCart from './components/ShopCart';

const initialCartItems = [
  // {
  //   product: {
  //     id: 1,
  //     name: 'Teclado Mecanico RGB',
  //     description: 'Teclado mecanico con luces RGB switches cherry red',
  //     price: 's/. 100'
  //   },
  //   quantity: 1,
  //   total: 11
  // }
]

function App() {

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleAddProductCart = (product) => {
    setCartItems([
      ...cartItems, 
      {
        product,
        quantity: 71,
        total: 14
      }
    ])
  }

  return (
    <div className='container'>

      <Product handler={handleAddProductCart}/>

      <ShopCart cartItems={cartItems}/>
    </div>
  )
}

export default App
