import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount";

export default function ItemDetail(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.price}
                    {props.description}
                </Card.Text>
            </Card.Body>
            <ItemCount initial={1} stock={props.stock} />
        </Card>
    );
}