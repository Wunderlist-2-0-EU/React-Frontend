import React from "react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";
import { Box, Flex, Button } from "@chakra-ui/core";
import { SubtleButton1 } from "./CustomButtons";

function Container(props) {
  return (
    <Box marginX="auto" maxWidth="500px">
      <Flex>
        <Button variantColor="cyan">Todo</Button>
        <SubtleButton1>Completed</SubtleButton1>
      </Flex>
      <AddTodoForm />
      <Todo task="Buy milk, egg and flour" />
    </Box>
  );
}

export default Container;
