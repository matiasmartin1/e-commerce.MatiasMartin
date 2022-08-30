import React, {useContext} from 'react'
import { CartContext } from "../CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {

  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext)

  console.log(totalPrice);
  return (
    <div >
      <div >
        <h2>Tu carrito</h2>
        <hr />
      </div>
      <hr />
      <Container >
        <Row >
          <Col m={2}>IMAGEN</Col>
          <Col m={3}>NOMBRE DEL PRODUCTO</Col>
          <Col m={2} >CANTIDAD</Col>
          <Col m={2}>PRECIO POR UNIDAD</Col>
          <Col m={2}>PRECIO TOTAL</Col>
          <Col m={1}></Col>
        </Row>
        <Container >
          {cart == "" ? (
            <div>
              <p>¡El carrito está vacío!</p>
              <Button as={Link} to="/">
              Ir de compras
              </Button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <Row key={item.id} >
                  <Col m={2} >
                    <Link to={`/item/${item.id}`}>
                      <img src={item.image} width="100px"  alt={item.title}></img>
                    </Link>
                  </Col>
                  <Col m={3} >
                    {item.title}  {item.weight}
                  </Col>
                  <Col m={2} >{item.contador}</Col>
                  <Col m={2} >{`$ ${item.price}`}</Col>
                  <Col m={2} >{`$ ${
                    item.contador * item.price
                  }`}</Col>
                  <Col m={1} >
                    <Button
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Container>
      </Container>
      <hr />
      {cart == "" ? (
        <></>
      ) : (
        <div >
        <div >TOTAL: $ {totalPrice}</div>
        <div>
          <Button as={Link} to="/" variant="outline-primary">
            Continuar comprando
          </Button>
          <div >
            <Button variant="outline-danger" onClick={clearCart}>
              vaciar carrito
            </Button>
            <Button variant="outline-success">
              FINALIZAR COMPRA
            </Button>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
