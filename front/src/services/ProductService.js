
import { products } from '../data/products';

export default function ProductService() {

  return products;
}

  export const CalculatorTotal = (cartItems) => {
  return cartItems.reduce(
    (acumulator, item) => acumulator + item.product.price * item.quantity, 0)
  
}

