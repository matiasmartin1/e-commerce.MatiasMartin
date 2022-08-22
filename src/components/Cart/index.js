import React from 'react'
import { useCartContext } from '../CartContext'
import CartItem from '../CartItem'

export default function Cart (){
   
    const { clear, totalPrice, cartData, finalizarCompra} = useCartContext()
    
    return(
      <div >
      <h3>Items:</h3>
      <div >
        {cartData.length > 0
          ? cartData.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  quantity={item.quantity}
                  title={item.nombre}
                  imagen={item.imagen}
                  precio={item.precio}
                />
              );
            })
          : "No tienes items en el carrito"}
      </div>
      <div >
        <h4 >Monto total: ${totalPrice()}</h4>
        <div>
        <div> { clear() } </div>
        <div> {finalizarCompra()} </div>
        </div>
      </div>
    </div>
    )
}
