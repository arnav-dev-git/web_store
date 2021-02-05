import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
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
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const subminHandler = (e) => {
    e.preventDefault();
    // DISPATCH REGISTER
    if (password !== confirmPassword) {
      setMessage("Password do not match !");
    } else {
      //! DISPATCH UPDATE PROFILE
    }
  };

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // const userInfoInLocalStorage = localStorage.getItem("userInfo");

  // useEffect(() => {
  //   if (userInfoInLocalStorage && userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfoInLocalStorage, userInfo, redirect]);

  return (
    <>
      <Row>
        <Col md={3}>
          <h2>User Profile</h2>
          {error && <Message variant="success">{error}</Message>}
          {message && <Message variant="success">{message}</Message>}
          {loading ? (
            <Loader />
          ) : (
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
                Update
              </Button>
            </Form>
          )}
        </Col>
        <Col md={9}>
          <h2>Your Orders</h2>
        </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;
