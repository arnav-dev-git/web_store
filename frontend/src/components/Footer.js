import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center mx-0 px-0">
            <p>Copyright © ElectronStore</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
