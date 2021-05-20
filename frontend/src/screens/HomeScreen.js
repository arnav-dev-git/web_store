import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../../src/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { motion } from "framer-motion";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "8vw" }}>Latest Products</h1>
      {loading && <Loader /> && error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 110,
            }}
          >
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
          </motion.div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
