import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function ItemDetail({ producto }) {

    const [addedToCart, setAddedToCart] = useState(false); 

    const onAddItems = () => {
        setAddedToCart(true);
      };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    $ {producto.precio}
                    <br></br>
                    {producto.descripcion}
                </Card.Text>
                {addedToCart ? (
          <div>
            <Link to="/cart">
              <button>Ir al carrito</button>
            </Link>
            <Link to="/">
              <button>Continuar comprando</button>
            </Link>
          </div>
        ) : (
          <ItemCount
            stock={producto.stock}
            itemAddToCart={onAddItems}
            initial={1}
          />
        )}
            </Card.Body>
        </Card>
    );
}