import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "12vw" }}>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col
            key={product._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex align-items-stretch my-4 "
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
