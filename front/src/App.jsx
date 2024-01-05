import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Product from './components/Product'
import ShopCart from './components/ShopCart';
import { useItemsCard } from './hooks/useItemsCart';
import { NavBar } from './components/NavBar';

function App() {

  const {cartItems, handleAddProductCart, handleDeleteProductCart} = useItemsCard();

  return (
    <div className='container'>
      
      <NavBar />

      <Routes>
        <Route 
          path='catalog' 
          element={<Product  handler={handleAddProductCart}/>}
        />
        <Route 
          path='cart'
          element={cartItems?.length <= 0 ?
            <h2>No hay productos en el carro de compras</h2>
            :  
            (
              <ShopCart cartItems={cartItems} handleDelete={handleDeleteProductCart}/>
            )}
        />
        <Route path='/' element={<Navigate to={'catalog'}/>} />
      </Routes>

    </div>
  )
}

export default App
