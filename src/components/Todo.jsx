import React from "react";
import { Checkbox, Stack, Flex, Button, Box } from "@chakra-ui/core";
import { SubtleButton1 } from "./CustomButtons";
import DeleteTodo from "./DeleteTodo";

function Todo(props) {
  const { task, isChecked } = props;
  return (
    <Box marginX="auto" maxWidth="500px">
      <Flex marginTop="30px">
        <Stack spacing={10} isInline>
          <Checkbox variantColor="cyan" isChecked={isChecked}>
            {task}
          </Checkbox>
        </Stack>

        <Button
          size="sm"
          variant="outline"
          variantColor="cyan"
          marginLeft="105px"
        >
          Edit
        </Button>
      </Flex>
      <Stack isInline spacing="50px" marginTop="30px">
        <SubtleButton1>Mark Completed</SubtleButton1>
        <DeleteTodo />
      </Stack>
    </Box>
  );
}

export default Todo;
