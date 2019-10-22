import React from 'react';
import { Checkbox, Stack, Flex, Button, Box } from '@chakra-ui/core';
import { SubtleButton1 } from './CustomButtons';
import DeleteTodo from './DeleteTodo';
import { connect } from 'react-redux';

function Todo({ todo, isChecked }) {
  return (
    <Box marginX='auto' maxWidth='500px'>
      <Flex marginTop='30px'>
        <Stack spacing={10} isInline>
          <Checkbox variantColor='cyan' isChecked={isChecked}>
            <p>{todo.task}</p>
          </Checkbox>
        </Stack>

        <Button
          size='sm'
          variant='outline'
          variantColor='cyan'
          marginLeft='105px'
        >
          Edit
        </Button>
      </Flex>
      <Stack isInline spacing='50px' marginTop='30px'>
        <SubtleButton1>Mark Completed</SubtleButton1>
        <DeleteTodo />
      </Stack>
    </Box>
  );
}

export default connect(state => state)(Todo);
