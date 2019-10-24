import React from 'react';
import AddTodoForm from './AddTodoForm';
import { Box, Flex, Heading } from '@chakra-ui/core';
import LeftNavigation from './LeftNavigation';
import EditTodoForm from './EditTodoForm';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import PrivateRoute from './PrivateRoute';

function Container() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCompleted, setShowCompleted] = React.useState(false);
  return (
    <Box>
      <Navigation setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Flex bg='gray.50' minHeight='100vh'>
        <Box paddingTop='100px' as='aside' id='side-nav' flexBasis='20%'>
          <LeftNavigation setShowCompleted={setShowCompleted} />
        </Box>
        <Box
          py='50px'
          px='40px'
          bg='white'
          as='main'
          id='content-area'
          flexBasis='50%'
        >
          <Heading size='lg' marginBottom='20px'>
            Tasks
          </Heading>
          <AddTodoForm />
          <TodoList searchTerm={searchTerm} showCompleted={showCompleted} />
        </Box>
        <Box id='edit-form-container' flexBasis='30%'>
          <PrivateRoute path='/todoapp/edit/:id' component={EditTodoForm} />
        </Box>
      </Flex>
    </Box>
  );
}

export default connect(state => state)(Container);
