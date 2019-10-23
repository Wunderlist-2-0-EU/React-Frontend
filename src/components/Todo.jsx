// <<<<<<< liam-sutton
// import React from 'react';
// import { Checkbox, Stack, Flex, Button, Box } from '@chakra-ui/core';
// import { SubtleButton1 } from './CustomButtons';
// import DeleteTodo from './DeleteTodo';
// import { connect } from 'react-redux';

// function Todo({ todo, isChecked }) {
// =======
import React from "react";
import { Checkbox, Stack, Flex, Button, Box } from "@chakra-ui/core";
import { SubtleButton1, SubtleButton2 } from "./CustomButtons";
import DeleteTodo from "./DeleteTodo";

function Todo(props) {
  const { task, isChecked, onDelete, onEdit, onCheck } = props;
  const [isOpen, setIsOpen] = React.useState();
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
// >>>>>>> master
  return (
    <Box marginX='auto' maxWidth='500px'>
      <Flex marginTop='30px'>
        <Stack spacing={10} isInline>
<!-- <<<<<<< liam-sutton
          <Checkbox variantColor='cyan' isChecked={isChecked}>
            <p>{todo.task}</p>
======= -->
          <Checkbox
            onChange={() => onCheck(!isChecked)}
            variantColor="cyan"
            isChecked={isChecked}
          >
            {task}
<!-- >>>>>>> master -->
          </Checkbox>
        </Stack>

        <Button
<!-- <<<<<<< liam-sutton
          size='sm'
          variant='outline'
          variantColor='cyan'
          marginLeft='105px'
======= -->
          size="sm"
          variant="outline"
          variantColor="cyan"
          marginLeft="105px"
          onClick={onEdit}
<!-- >>>>>>> master -->
        >
          Edit
        </Button>
      </Flex>
      <Stack isInline spacing='50px' marginTop='30px'>
        <SubtleButton1>Mark Completed</SubtleButton1>
        <SubtleButton2 onClick={onOpen}>Delete</SubtleButton2>

        <DeleteTodo isOpen={isOpen} onClose={onClose} onConfirm={onDelete} />
      </Stack>
    </Box>
  );
}

export default connect(state => state)(Todo);
