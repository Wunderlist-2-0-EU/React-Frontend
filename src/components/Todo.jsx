import React from "react";
import { Checkbox, Stack, Flex, Button, Box } from "@chakra-ui/core";
import { SubtleButton1, SubtleButton2 } from "./CustomButtons";
import DeleteTodo from "./DeleteTodo";

function Todo(props) {
  const { task, isChecked, onDelete, onEdit, onCheck } = props;
  const [isOpen, setIsOpen] = React.useState();
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <Box marginX="auto" maxWidth="500px">
      <Flex marginTop="30px">
        <Stack spacing={10} isInline>
          <Checkbox
            onChange={() => onCheck(!isChecked)}
            variantColor="cyan"
            isChecked={isChecked}
          >
            {task}
          </Checkbox>
        </Stack>

        <Button
          size="sm"
          variant="outline"
          variantColor="cyan"
          marginLeft="105px"
          onClick={onEdit}
        >
          Edit
        </Button>
      </Flex>
      <Stack isInline spacing="50px" marginTop="30px">
        <SubtleButton1>Mark Completed</SubtleButton1>
        <SubtleButton2 onClick={onOpen}>Delete</SubtleButton2>

        <DeleteTodo isOpen={isOpen} onClose={onClose} onConfirm={onDelete} />
      </Stack>
    </Box>
  );
}

export default Todo;
