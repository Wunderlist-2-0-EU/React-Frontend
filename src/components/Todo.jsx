import React from "react";
import { Checkbox, Stack, Flex, Button, Box } from "@chakra-ui/core";
import { SubtleButton1, SubtleButton2 } from "./CustomButtons";
import * as actionCreators from "../actionCreators";
import { connect } from "react-redux";
import DeleteTodo from "./DeleteTodo";

export function Todo(props) {
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

export default connect(
  state => state,
  actionCreators
)(Todo);
