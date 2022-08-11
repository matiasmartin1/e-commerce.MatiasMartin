import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Item({ producto }) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          {producto.precio}
        </Card.Text>
        <Button variant="primary"> <Link to={`/item/${producto.id}`} >Detalle de producto</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Item;