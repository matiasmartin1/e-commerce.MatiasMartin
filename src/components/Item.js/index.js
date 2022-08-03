import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button variant="primary">Detalle de producto</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;