import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import Todo from './Todo';
import { Flex, Spinner, Text } from '@chakra-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';

const Loading = () => (
  <Flex align='center' justify='center' padding='40px'>
    <Spinner color='cyan.500' />
    <Text ml={4}>Loading Todolist</Text>
  </Flex>
);

const TodoList = props => {
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    props.getTaskList();
  }, []);

  if (props.tasks.isFetching) {
    return <Loading />;
  }
  return (
    <>
      <div>
        {props.displayedTasks.state
          .filter(task =>
            props.searchTerm ? task.task.includes(props.searchTerm) : true
          )
          .filter(
            task =>
              task.completed === props.showCompleted || task.completed === null
          )
          .map(todo => (
            <Todo
              key={todo.id}
              task={todo.task}
              isChecked={todo.completed}
              onDelete={() => {
                props.deleteTask(todo.id);
              }}
              onEdit={() => {
                history.push(`${match.path}/edit/${todo.id}`);
              }}
              onCheck={() => {
                const newTodo = {
                  ...todo,
                  completed: !todo.completed
                };
                props.EditTask(newTodo);
              }}
            />
          ))}
      </div>
    </>
  );
};

export default connect(
  state => state,
  actionCreators
)(TodoList);
