import React from "react";
import AddTodoForm from "./AddTodoForm";
import { Box, Flex, Heading } from "@chakra-ui/core";
import LeftNavigation, { SideNavLink } from "./LeftNavigation";
import EditTodoForm from "./EditTodoForm";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import PrivateRoute from "./PrivateRoute";

function Container(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <Box>
      <Navigation setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Flex bg="gray.50" minHeight="100vh">
        <Box paddingTop="100px" as="aside" id="side-nav" flexBasis="20%">
          <LeftNavigation />
        </Box>
        <Box
          py="50px"
          px="40px"
          bg="white"
          as="main"
          id="content-area"
          flexBasis="50%"
        >
          <Heading size="lg" marginBottom="20px">
            Tasks
          </Heading>
          <AddTodoForm />
          <TodoList searchTerm={searchTerm} />
        </Box>
        <Box id="edit-form-container" flexBasis="30%">
          <PrivateRoute path="/todoapp/edit/:id" component={EditTodoForm} />
        </Box>
      </Flex>
    </Box>
  );
}

export default connect(state => state)(Container);
