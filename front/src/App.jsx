import './App.css'
import { Navigate, createHashRouter, RouterProvider } from 'react-router-dom'
import Product from './components/Product'
import ShopCart from './components/ShopCart';
import { useItemsCard } from './hooks/useItemsCart';
// import { NavBar } from './components/NavBar'

function App() {

  const {cartItems, handleAddProductCart, handleDeleteProductCart} = useItemsCard();

  const router = createHashRouter ([
    {
      path: "/",
      element: <Navigate to={'catalog'}/>,
    },
    {
      path: "/catalog",
      element: <Product  handler={handleAddProductCart}/>,
    },
    {
      path: "/cart",
      element: cartItems?.length <= 0 ?
        <h2>No hay productos en el carro de compras</h2>
        :  
        (
          <ShopCart cartItems={cartItems} handleDelete={handleDeleteProductCart}/>
        )
    }
  ])

  return (
    <div className='container'>

      <RouterProvider router={router}/>

      {/* <NavBar />

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
      </Routes> */}

    </div>
  )
}

export default App
