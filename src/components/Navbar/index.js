import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Cartwidget';
import { Link } from 'react-router-dom'

function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <Nav.Link as={Link} to={'/'} >
            Logo
            </Nav.Link>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/:id">Tipos de zapatilla 3</Nav.Link>
            <Nav.Link as={Link} to="/">Descuentos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComp;