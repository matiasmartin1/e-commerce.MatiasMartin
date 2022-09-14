import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Cartwidget';
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';

function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand > <Nav.Link as={Link} to={'/'} >
            Logo
            </Nav.Link>
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="link__active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Contacto
            </Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/zapatillas">
                Zapatillas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/buzos">
                Buzos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComp;

<Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>