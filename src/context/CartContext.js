import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cantInCart, setCantInCart] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const isInCart = (id) => {
    const productInCart = cart.find((product) => product.id === id)
    if (productInCart) return true;
    return false;
  }

  const addItem = (product) => {
    setCantInCart(cantInCart + product.contador);
    setTotalPrice(totalPrice + product.price *product.contador)
    if (isInCart(product.id)) {
      const newCart = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            contador: productInCart.contador + product.contador
          };
        } else {
          return productInCart
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, product])
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id))
    const itemRemoved = cart.find(product => product.id === id);
    setCantInCart(cantInCart - itemRemoved.contador);
    setTotalPrice(totalPrice - itemRemoved.contador * itemRemoved.price);
  }

  const clearCart = () => {
    setCart([])
    setCantInCart(0)
    setTotalPrice(0);
  }


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cantInCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;