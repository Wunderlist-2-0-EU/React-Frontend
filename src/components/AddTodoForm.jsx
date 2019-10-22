import React from "react";
import { Input, Button, Flex, Stack } from "@chakra-ui/core";

function AddTodoForm(props) {
  const { todo } = props;
  return (
    <Stack isInline marginX="auto" maxWidth="500px">
      <Input
        type="text"
        placeholder="Add Task..."
        value={todo}
        focusBorderColor="cyan.500"
      />
      <Button type="submit" paddingX="40px" variantColor="cyan" color="white">
        Add
      </Button>
    </Stack>
  );
}

export default AddTodoForm;
