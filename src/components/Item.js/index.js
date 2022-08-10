import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({ producto }) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          {producto.price}
        </Card.Text>
        <Button variant="primary">Detalle de producto</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;