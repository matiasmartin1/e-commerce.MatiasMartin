import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'

export const Cart = () => {
   
    const { addITem, removeItem, clear} = useContext(CartContext)
    
    return(
    <div>
      <Button onClick={addItem}>Comprar</Button>
      <Button onClick={removeItem}>Quitar Item</Button>
      <Button onClick={clear}>Limpiar el carrito</Button>
    </div>
    )
}
