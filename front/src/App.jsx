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

    const hasItem = cartItems.find((i)=>i.product.id === product.id);

    if (hasItem) {
      
      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity + 1
      //   }
      // ])

      setCartItems(
        cartItems.map((i) => {
          if (i.product.id === product.id) {
            i.quantity = i.quantity + 1;
          }
          return i;
        })
      );

    } else {
      setCartItems([
        ...cartItems, 
        {
          product,
          quantity: 1,
        }
      ])
    }

  const handleDeleteProductCart = (id) => {
    setCartItems([
      ...cartItems.filter((i) => i.product.id !== id)
    ]);
  }  

  }

  return (
    <div className='container'>

      <Product handler={handleAddProductCart}/>

      <ShopCart cartItems={cartItems} handleDelete={handleDeleteProductCart}/>
    </div>
  )
}

export default App
