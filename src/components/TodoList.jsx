import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import Todo from './Todo';
import { Flex, Spinner, Text, Stack } from '@chakra-ui/core';
import { SubtleButton1 } from './CustomButtons';
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
    <div>
      {props.displayedTasks.state
        .filter(task =>
          props.searchTerm ? task.task.includes(props.searchTerm) : true
        )
        .map(todo => (
          <Todo
            className='todo-item'
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
              props.editTask(newTodo);
            }}
          />
        ))}

      <Stack isInline spacing='50px' marginTop='30px'>
        <SubtleButton1>Mark Completed</SubtleButton1>
      </Stack>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(TodoList);
