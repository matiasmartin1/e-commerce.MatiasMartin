import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function ItemDetail({ id,
  nombre,
  precio,
  descripcion,
  stock,
  imagen,
 }) {

  const [addedToCart, setAddedToCart] = useState(false);
  const itemData = { nombre, imagen, precio, id, stock };


  const onAddItems = (quantityToAdd) => {
    setAddedToCart(true);
  };

  return (
    <Card style={{ width: '18rem' }} justify-content='center'>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          $ {precio}
          <br></br>
          {descripcion}
        </Card.Text>
        {addedToCart ? (
          <div>
            <Link to="/cart">
              <Button variant="primary">Ir al carrito</Button>
            </Link>
            <Link to="/">
              <Button variant="primary">Continuar comprando</Button>
            </Link>
          </div>
        ) : (
          <ItemCount
            stock={stock}
            itemData={itemData}
            itemAddToCart={onAddItems}
            initial={1}
          />
        )}
      </Card.Body>
    </Card>
  );
}