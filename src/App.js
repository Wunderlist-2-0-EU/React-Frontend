import React from "react";
import { Route } from "react-router-dom";
import { Heading } from "@chakra-ui/core";
import Container from "./components/Container";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import TodoList from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

function App() {
  return (
    <div className="App">
      {/* <Heading textAlign="center" color="#00B5D8" paddingY="20px">
        Wunderlist-2.0
      </Heading> */}
      <Route exact path="/" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <PrivateRoute path="/todolist" component={TodoList} />
      <Route path="/layout" component={Container} />
    </div>
  );
}

export default App;
