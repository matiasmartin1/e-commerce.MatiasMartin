import {FaShoppingCart} from 'react-icons/fa'
import { useCartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function CartWidget () {
  const { cartData } = useCartContext();

    return (
        <Nav.Link as={Link} to={`/cart`} >
        <FaShoppingCart />
        <span>{ cartData.length }</span>
        </Nav.Link>
    )
}  