import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import Todo from './Todo';
import { Flex, Spinner, Text } from '@chakra-ui/core';

const Loading = () => (
  <Flex align='center' justify='center' padding='40px'>
    <Spinner color='cyan.500' />
    <Text ml={4}>Loading Todolist</Text>
  </Flex>
);

const TodoList = props => {
  useEffect(() => {
    props.getTaskList();
  }, []);

  if (props.tasks.isFetching) {
    return <Loading />;
  }

  return (
    <div>
      {props.tasks.taskList.map(todo => (
        <Todo
          key={todo.id}
          task={todo.task}
          isChecked={todo.completed}
          onDelete={() => {
            props.deleteTask(todo.id);
          }}
          onCheck={() => {
            const newTodo = {
              ...todo,
              completed: !todo.completed
            };
            props.editTask(newTodo);
          }}
        />
      ))}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(TodoList);
