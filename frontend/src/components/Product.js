import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const Product = ({ product }) => {
  // rounded
  return (
    <Card className="my-3 pl-3 pr-3 pt-3 pb-0  border-primary h-100 ">
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as="div" style={{ fontSize: "20px" }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              stars={product.rating}
              text={`${product.numReviews} Reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text
          as="p"
          style={{ fontSize: "25px" }} //color: "#232323",
          className="mb-0"
        >
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
