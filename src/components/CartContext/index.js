import React, { useState, useContext } from "react";
import { Button } from 'react-bootstrap'


export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
    
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
    const listaActualizada = cart.find(
        (productInCart) => productInCart.id === item.id
      )
        ? cart.map((productInCart) => {
            if (productInCart.id === item.id) {
              return {
                ...productInCart,
                quantity: productInCart.quantity + item.quantity,
              };
            }
            return productInCart;
          })
        : [...cart, item];
      setCart(listaActualizada);
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((product) => product.id !== itemId));
    };

    const clear = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.length >= 1 ? (cart.reduce((prev, item) => prev + item.quantity * item.precio, 0)) : (
            " "
          );;
      };

      const finalizarCompra = () => {
        return cart.length >= 1 ? (
          <Button onClick={clear} className="btn btn-success w-100">
            Finalizar Compra
          </Button>
        ) : (
          " "
        );
      };
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalPrice, cartData: cart, finalizarCompra}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;