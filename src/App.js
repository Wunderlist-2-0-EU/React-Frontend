
import React from 'react';
// import { Route } from 'react-router-dom';
import { Heading } from "@chakra-ui/core";
import Container from "./components/Container";
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';


 function App() {
  return (
    <div className="App">
      <Heading textAlign="center" color="#00B5D8" paddingY="20px">
        Wunderlist-2.0
      </Heading>
      <SignupForm />
      <Container />
{/*   <Route exact path='/' component={SignupForm} />
      <Route path='/login' component={LoginForm} /> */}

    </div>
  );
}

export default App;
