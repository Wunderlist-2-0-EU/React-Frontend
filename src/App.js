import React from "react";
import SignupForm from "./components/SignupForm";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
import { Heading } from "@chakra-ui/core";

function App() {
  return (
    <div className="App">
      <Heading textAlign="center" color="#00B5D8" paddingY="20px">
        Wunderlist-2.0
      </Heading>
      <SignupForm />
      <AddTodoForm />
      <Todo task="Buy milk, egg and flour" isChecked={true} />
    </div>
  );
}

export default App;
