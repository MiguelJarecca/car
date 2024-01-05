
import { useEffect, useReducer } from "react";
import { ItemReducer } from "../reducer/ItemReducer";

//Traemos la informacion del Session Storage
//Si no tiene ningun item colocamos un array vacio para que pueda inicializar
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCard = () => {

  // const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartItems, dispach] = useReducer(ItemReducer, initialCartItems);

  useEffect(() => {
    //guardamos en la Sesion Storage
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  },[cartItems])

  const handleAddProductCart = (product) => {

    const hasItem = cartItems.find((i)=>i.product.id === product.id);

    if (hasItem) {
      // Otra forma de aumentar la cantidad con filter
      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity + 1
      //   }
      // ])

      // setCartItems(
      //   cartItems.map((i) => {
      //     if (i.product.id === product.id) {
      //       i.quantity = i.quantity + 1;
      //     }
      //     return i;
      //   })
      // );

      dispach(
        {
          type: 'UpdateQuantityProductCard',
          payload: product,
        }
      )

    } else {
      // setCartItems([
      //   ...cartItems, 
      //   {
      //     product,
      //     quantity: 1,
      //   }
      // ])

      dispach(
        {
          type: 'AddProductCard',
          payload: product,
        }
      )
    }  
  }

  const handleDeleteProductCart = (id) => {
    // setCartItems([
    //   ...cartItems.filter((i) => i.product.id !== id)
    // ]);
  
  dispach(
    {
      type: 'DeleteProductCard',
      payload: id,
    }
  )  
  }

  return {
    cartItems,
    handleAddProductCart,
    handleDeleteProductCart
  }
}