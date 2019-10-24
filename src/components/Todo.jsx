import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Checkbox, Stack, Flex, Box, IconButton } from '@chakra-ui/core';
import DeleteTodo from './DeleteTodo';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';

function Todo(props) {
  const { task, isChecked, onDelete, onEdit, onCheck } = props;
  const [isOpen, setIsOpen] = useState();

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <Box>
      <Flex marginTop='30px' justify='space-between'>
        <Stack spacing={10} isInline>
          <Checkbox
            onChange={() => onCheck(!isChecked)}
            variantColor='cyan'
            isChecked={isChecked}
          >
            {task}
          </Checkbox>
        </Stack>
        <Stack isInline spacing='20px' marginRight='20px'>
          <IconButton
            onClick={() => onEdit()}
            variant='outline'
            variantColor='cyan'
            size='sm'
            aria-label='Edit'
            icon={FaRegEdit}
          />
          <DeleteTodo isOpen={isOpen} onClose={onClose} onConfirm={onDelete} />
          <IconButton
            onClick={onOpen}
            variant='outline'
            size='sm'
            variantColor='red'
            aria-label='Delete'
            icon={FaTrashAlt}
          />
        </Stack>
      </Flex>
    </Box>
  );
}

export default connect(state => state)(Todo);
