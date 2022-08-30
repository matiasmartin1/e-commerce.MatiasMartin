import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function ItemDetail({ id,
  title,
  price,
  descripcion,
  stock,
  image,
 }) {

  const [addedToCart, setAddedToCart] = useState(false);
  const itemData = { title, image, price, id, stock };


  const onAddItems = (quantityToAdd) => {
    setAddedToCart(true);
  };

  return (
    <Card style={{ width: '18rem' }} justify-content='center'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          $ {price}
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