import React from "react";
import { Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import Container from "./components/Container";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <PrivateRoute path="/todoapp" component={Container} />
    </div>
  );
}

export default App;
