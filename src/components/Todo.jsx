import React, { useState } from "react";
import { connect } from "react-redux";
import { Checkbox, Stack, Flex, Button, Box } from "@chakra-ui/core";
import { SubtleButton1, SubtleButton2 } from "./CustomButtons";
import DeleteTodo from "./DeleteTodo";

function Todo(props) {
  const { task, isChecked, onDelete, onEdit, onCheck } = props;
  const [isOpen, setIsOpen] = useState();

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
     
    </Box>
  );
}

export default connect(state => state)(Todo);
