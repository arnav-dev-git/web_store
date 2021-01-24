import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { Row, Col, ListGroup, Image, Form, Button } from "react-bootstrap";
import Message from "../components/Message";

const CartScreen = ({ match, history, location }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log("cart items: ", cartItems.length);
  console.log("product id : ", productId);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((x) => (
              <ListGroup.Item key={x.product}>
                <Row>
                  <Col md={2}>
                    <Image src={x.image} alt={x.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${x.product}`}>{x.name}</Link>
                  </Col>
                  <Col md={2}>${x.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => {
                        console.log(x.product, x.countInStock, qty);
                        dispatch(addToCart(x.product, Number(e.target.value)));
                      }}
                    >
                      {[...Array(x.countInStock).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light">
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={2}>
        <h1>Hello</h1>
      </Col>
      <Col md={2}>Yo</Col>
    </Row>
  );
};

export default CartScreen;
