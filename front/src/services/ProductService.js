
export const ProductService = async() => {
  const response = await fetch('http://localhost:8080/api/products');
  const products = await response.json(); 
  return products;
}

  export const CalculatorTotal = (cartItems) => {
  return cartItems.reduce(
    (acumulator, item) => acumulator + item.product.price * item.quantity, 0)
  
}

