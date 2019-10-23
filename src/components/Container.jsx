// <<<<<<< liam-sutton
// import React from 'react';
import { connect } from 'react-redux';
// import { Box, Flex, Button } from '@chakra-ui/core';
// import { SubtleButton1 } from './CustomButtons';
// import AddTodoForm from './AddTodoForm';
// import TodoList from './TodoList';
// import EditTodoForm from './EditTodoForm';
// import LeftNavigation from './LeftNavigation';
// import Navigation from './Navigation';

// function Container(props) {
//   return (
//     <>
//       <Navigation />
//       <Box marginX='auto' maxWidth='500px'>
//         <Flex>
//           <Button variantColor='cyan'>Todo</Button>
//           <SubtleButton1>Completed</SubtleButton1>
//         </Flex>
//         <AddTodoForm />
//         <EditTodoForm />
//         <TodoList />
//         <LeftNavigation />
//       </Box>
//     </>
// =======
import React from "react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";
import { Box, Flex, Button, Stack } from "@chakra-ui/core";
import { SubtleButton1 } from "./CustomButtons";
import SearchForm from "./SearchForm";
import LeftNavigation, { SideNavLink } from "./LeftNavigation";
import EditTodoForm from "./EditTodoForm";
import TodoList from "./TodoList";
import HeaderNav from "./HeaderNav";

// function Container(props) {
//   return (
//     <Box marginX="auto" maxWidth="500px">
//       <LeftNavigation />
//       <Flex>
//         <Button variantColor="cyan">Todo</Button>
//         <SubtleButton1>Completed</SubtleButton1>
//       </Flex>
//       {/* <AddTodoForm /> */}
//       {/* <EditTodoForm /> */}
//       {/* <Todo task="Buy milk, egg and flour" /> */}
//     </Box>
//   );
// }

function Container(props) {
  return (
    <Box>
      <HeaderNav />
      <Flex bg="gray.50" minHeight="100vh">
        <Box paddingTop="100px" as="aside" id="side-nav" flexBasis="20%">
          <Stack maxWidth="180px" mx="auto">
            <SideNavLink>Overdue</SideNavLink>
            <SideNavLink>Today</SideNavLink>
            <SideNavLink>Daily</SideNavLink>
          </Stack>
        </Box>
        <Box
          py="100px"
          px="40px"
          bg="white"
          as="main"
          id="content-area"
          flexBasis="50%"
        >
          <AddTodoForm />
          <TodoList />
        </Box>
        <Box id="edit-form-container" flexBasis="30%">
          <EditTodoForm />
        </Box>
      </Flex>
    </Box>
// >>>>>>> master
  );
}

export default connect(state => state)(Container);
