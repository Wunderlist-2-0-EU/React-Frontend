import React from 'react';
import { FormControl, FormLabel, Input, Button, Select } from '@chakra-ui/core';

export default function() {
  return (
    <FormControl>
      <FormLabel htmlFor='task'>Task</FormLabel>
      <Input type='text' id='task' aria-describedby='task-description' />
      <FormLabel htmlFor='completed'>Completed</FormLabel>
      <Input type='checkbox' id='completed' aria-describedby='completed' />
      <FormLabel htmlFor='due-date'>Due</FormLabel>
      <Input type='date' id='due-date' aria-describedby='due-date' />
      <FormLabel htmlFor='repeat'>Repeat</FormLabel>
      <Select id='repeat' placeholder='Select...'>
        <option value='daily'>Daily</option>
        <option value='weekly'>Weekly</option>
        <option value='monthly'>Monthly</option>
      </Select>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </FormControl>
  );
}
