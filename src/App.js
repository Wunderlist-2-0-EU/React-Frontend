import React from 'react';
import { Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className='App'>
      <h1>Wunderlist-2.0</h1>
      <Route exact path='/' component={SignupForm} />
      <Route path='/login' component={LoginForm} />
    </div>
  );
}

export default App;
