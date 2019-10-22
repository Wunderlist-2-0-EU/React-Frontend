import React from 'react';
import { connect } from 'react-redux';
import { Box, Flex, Button } from '@chakra-ui/core';
import { SubtleButton1 } from './CustomButtons';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import EditTodoForm from './EditTodoForm';
import LeftNavigation from './LeftNavigation';
import Navigation from './Navigation';

function Container(props) {
  return (
    <>
      <Navigation />
      <Box marginX='auto' maxWidth='500px'>
        <Flex>
          <Button variantColor='cyan'>Todo</Button>
          <SubtleButton1>Completed</SubtleButton1>
        </Flex>
        <AddTodoForm />
        <EditTodoForm />
        <TodoList />
        <LeftNavigation />
      </Box>
    </>
  );
}

export default connect(state => state)(Container);
