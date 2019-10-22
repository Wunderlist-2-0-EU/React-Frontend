import React from "react";
import SignupForm from "./components/SignupForm";

import { Heading } from "@chakra-ui/core";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Heading textAlign="center" color="#00B5D8" paddingY="20px">
        Wunderlist-2.0
      </Heading>
      <SignupForm />
      <Container />
    </div>
  );
}

export default App;
