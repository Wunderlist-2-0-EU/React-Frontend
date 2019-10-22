// - Ability to display all todo

// ```jsx
// // Here's the shape of the todo object
// const todo = {
//   title: "",
//   task: "",
//   note: "",
//   setDate: "",
//   completed: false,
//   user_id: 1
// };

// // Here's the todos array
// const todos = [todo1, todo2]

// // Here's how we'll map over the todos
// <TodoList>
//   {todos.map(todo => (
//     <Todo data={todo} />
//   ))}
// </TodoList>
// ```

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actionCreators';

const TodoList = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>TodoList</h1>
      <Link to='/'>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </Link>
    </div>
  );
};

export default TodoList;
