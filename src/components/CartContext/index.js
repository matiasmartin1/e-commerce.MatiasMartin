import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState();


    const isInCart = (id) => {
        const productInCart = cart.find((productInCart) => productInCart.id === id);
        if (productInCart) return true;
        return false;
    };

    const addItem = (item, quantity) => {
        if (isInCart = true) {
            console.log('No se puede agregar el mismo item')
        } else {
            setTotalPrice(totalPrice + item.precio * quantity)
            setCart(cart.push(item))
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((product) => product.id !== itemId));
        const itemRemoved = cart.find(product => product.id === id);
        setCantInCart(cantInCart - itemRemoved.contador);
        setTotalPrice(totalPrice - itemRemoved.contador * itemRemoved.precio);
    };

    const clear = () => {
        setCart([])
        setPrice(0);
    }

    return (
        <CartContextProvider value={{ cart, addItem, removeItem, clear, totalPrice }}>
            {children}
        </CartContextProvider>
    )
}

export default CartContextProvide;