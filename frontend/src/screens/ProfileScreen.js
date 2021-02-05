import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  const subminHandler = (e) => {
    e.preventDefault();
    // DISPATCH REGISTER
    if (password !== confirmPassword) {
      setMessage("Password do not match !");
    } else {
      setMessage(null);
      //   dispatch(register(name, email, password));
    }
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userInfoInLocalStorage = localStorage.getItem("userInfo");

  useEffect(() => {
    if (userInfoInLocalStorage && userInfo) {
      history.push(redirect);
    }
  }, [history, userInfoInLocalStorage, userInfo, redirect]);

  return (
    <>
      <h1>Sign Up</h1>
      {error && <Message variant="success">{error}</Message>}
      {message && <Message variant="success">{message}</Message>}
      {loading && <Loader />}
      <Form onSubmit={subminHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Passwword"
            value={confirmPassword}
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="info">
          Sign UP
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an account ?{" "}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
            className="mx-1"
          >
            {" "}
            Log In
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;
