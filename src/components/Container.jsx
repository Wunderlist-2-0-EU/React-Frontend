import React from 'react';
import AddTodoForm from './AddTodoForm';
import { Box, Flex } from '@chakra-ui/core';
import LeftNavigation from './LeftNavigation';
import EditTodoForm from './EditTodoForm';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import Navigation from './Navigation';

function Container(props) {
  const [searchTerm, setSearchTerm] = React.useState('');
  return (
    <Box>
      <Navigation 
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <Flex bg='gray.50' minHeight='100vh'>
        <Box paddingTop='100px' as='aside' id='side-nav' flexBasis='20%'>
          <LeftNavigation />
        </Box>
        <Box
          py='100px'
          px='40px'
          bg='white'
          as='main'
          id='content-area'
          flexBasis='50%'
        >
          <AddTodoForm />
          <TodoList searchTerm={searchTerm} />
        </Box>
        <Box id='edit-form-container' flexBasis='30%'>
          <EditTodoForm />
        </Box>
      </Flex>
    </Box>
  );
}

export default connect(state => state)(Container);
