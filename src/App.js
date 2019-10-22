import React from 'react';
import { Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <h2>Wunderlist-2.0</h2>
      <Route exact path='/' component={SignupForm} />
      <Route path='/login' component={LoginForm} />
      <PrivateRoute path='/todolist' component={TodoList} />
    </div>
  );
}

export default App;
