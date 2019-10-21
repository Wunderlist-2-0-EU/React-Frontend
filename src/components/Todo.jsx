import React from "react";
import { Box, Checkbox, Stack } from "@chakra-ui/core";

function Todo(props) {
  const { task, isChecked } = props;
  return (
    <Box marginX="auto" maxWidth="500px">
      <Stack spacing={10} isInline>
        <Checkbox variantColor="cyan" isChecked={isChecked}>
          {task}
        </Checkbox>
      </Stack>
      {/* <input type="checkbox" defaultChecked={isChecked} />
      <p>{task}</p> */}
      <button>Edit</button>
    </Box>
  );
}

export default Todo;
