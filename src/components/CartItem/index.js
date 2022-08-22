import React, { memo } from 'react'
import Card from "react-bootstrap/Card";
import { useCartContext } from '../CartContext';
import Button from 'react-bootstrap/Button'

const CartItem = ({ producto }) => {
    const { removeItem } = useCartContext();


  return (
    <div >
        <Card style={{ width: '18rem' }}>
        <Card.Img
            variant="top"
            src={producto.imagen}
        />
        <Card.Body>
            <Card.Title>
                <h3>Cantidad: {producto.quantity}</h3>
                <h4>{producto.title}</h4>
            </Card.Title>
            <Card.Text >${producto.precio}</Card.Text>                            
            <Button variant="danger" onClick={() => removeItem(producto.id)}>Quitar Producto</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;