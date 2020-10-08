import React, { useReducer, useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

function App() {
  return (
    <body>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            {/* <Footer /> */}
          </Route>
          <Route path="/orders">
            <div className="App">
              <h1>This is Login</h1>
            </div>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </body>
  );
}

export default App;
