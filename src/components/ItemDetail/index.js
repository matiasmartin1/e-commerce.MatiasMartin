import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../CartContext';

export default function ItemDetail({  id, 
  nombre, 
  precio, 
  descripcion, 
  stock, 
  imagen,
  inicial }) {

    const [addedToCart, setAddedToCart] = useState(false); 

const {addItem} = useCartContext();

    const onAddItems = (quantityToAdd) => {
      addItem( {
        id, 
        nombre,
        quantity: quantityToAdd,
        imagen,
        precio      
      } )
        setAddedToCart(true);
      };

    return (
        <Card style={{ width: '18rem' }}>
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
              <button>Ir al carrito</button>
            </Link>
            <Link to="/">
              <button>Continuar comprando</button>
            </Link>
          </div>
        ) : (
          <ItemCount
            stock={stock}
            itemAddToCart={onAddItems}
            initial={inicial}
          />
        )}
            </Card.Body>
        </Card>
    );
}