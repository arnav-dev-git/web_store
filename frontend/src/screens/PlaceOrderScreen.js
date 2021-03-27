import React, { useState } from "react";
import { Button, Col, Row, ListGroup, Image, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p style={{ fontSize: "14px" }}>
                <strong style={{ fontWeight: "900", color: "black" }}>
                  Address:
                </strong>{" "}
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p style={{ fontSize: "14px" }}>
                <strong style={{ fontWeight: "900", color: "black" }}>
                  Method:
                </strong>{" "}
                {cart.paymentMethod}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Ordered Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message variant="danger">Your Cart is empty</Message>
              ) : (
                <ListGroup variant="flush"></ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
