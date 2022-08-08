import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({ image, title, price }) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary">Detalle de producto</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;