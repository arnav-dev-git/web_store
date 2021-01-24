import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
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

  const removeItemFromCartHandler = (e) => {
    console.log("Remove: ", e);
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8} sm={10}>
        <h1 className="shopping-cart-heading">Shopping Cart</h1>

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
                      value={x.qty}
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
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeItemFromCartHandler(x.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((tot, itm) => tot + itm.qty, 0)})
                Items
              </h2>
              $
              {cartItems
                .reduce((tot, itm) => tot + itm.qty * itm.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
                style={{ letterSpacing: "0.1rem" }}
              >
                PROCEED TO CHECKOUT
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
