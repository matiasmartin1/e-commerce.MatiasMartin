import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount";

export default function ItemDetail(producto) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    {producto.precio}
                    {producto.descripcion}
                </Card.Text>
                <ItemCount initial={1} stock={producto.stock} />
            </Card.Body>
        </Card>
    );
}