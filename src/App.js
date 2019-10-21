import React from "react";
import SignupForm from "./components/SignupForm";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div className="App">
      <h1>Wunderlist-2.0</h1>
      <SignupForm />
      <AddTodoForm />
    </div>
  );
}

export default App;
