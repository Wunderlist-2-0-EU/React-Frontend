import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.taskList.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default connect(state => state)(TodoList);
