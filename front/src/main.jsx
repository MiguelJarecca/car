import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// import { NavBar } from './components/NavBar.jsx'
// import Product from './components/Product.jsx'
// import ShopCart from './components/ShopCart.jsx'

// const router = createHashRouter ([
//   {
//     path: "/",
//     Element: <NavBar />,
//   },
//   {
//     path: "/catalog",
//     element: <Product />,
//   },
//   {
//     path: "/cart",
//     element: <ShopCart />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
