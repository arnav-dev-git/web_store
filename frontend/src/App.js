import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-4">
          <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/products/:id" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
