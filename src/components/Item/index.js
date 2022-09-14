import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './index.css'

function Item({ producto }) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.image} className='imagen' />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          $ {producto.price}
        </Card.Text>
        <Link to={`/item/${producto.id}`}>
        <Button variant="primary"> Detalle de producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;