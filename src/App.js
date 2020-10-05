import React, { useReducer, useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div className="App">
            <h1>This is Login</h1>
          </div>
        </Route>
        <Route path="/checkout">
          <div className="App">
            <h1>This is Login</h1>
          </div>
        </Route>
        <Route path="/orders">
          <div className="App">
            <h1>This is Login</h1>
          </div>
        </Route>
        <Route path="/">
          <Header />
          <div className="App">
            <h1>This is Home</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
