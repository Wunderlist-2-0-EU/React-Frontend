import React from "react";
import { Input, Button, Flex, Stack } from "@chakra-ui/core";
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";
// import { register } from "../serviceWorker";
// import { ADD_TASK } from "../actionTypes";

export function AddTodoForm(props) {
  const { todo, addTodo } = props;
  return (
    <Stack isInline marginX="auto" maxWidth="500px">
      <Input
        type="text"
        placeholder="Add Task..."
        value={todo}
        focusBorderColor="cyan.500"
      />
      <Button
        type="submit"
        paddingX="40px"
        variantColor="cyan"
        color="white"
        onClick={addTodo}
      >
        Add
      </Button>
    </Stack>
  );
}

export default connect(
  state => state,
  actionCreators
)(AddTodoForm);
