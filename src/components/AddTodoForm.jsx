import React, { useState } from "react";
import { Input, Button, Flex, Stack } from "@chakra-ui/core";
import { connect, useDispatch } from "react-redux";

import * as actionCreators from "../actionCreators";
// import { register } from "../serviceWorker";
// import { ADD_TASK } from "../actionTypes";

export function AddTodoForm(props) {
  // debugger;
  const { todo, addTask } = props;
  // const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title: "A",
    user_id: 42,
    setDate: "C",
    task: "D"
  });
  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const addTodo = event => {
    debugger;
    addTask(formValues);
  };

  return (
    <Stack isInline marginX="auto" maxWidth="500px">
      <Input
        type="text"
        placeholder="Add Task..."
        value={formValues.task}
        focusBorderColor="cyan.500"
        name="task"
        onChange={handleChange}
      />
      <Input
        title="Buy newspaper"
        value={formValues.title}
        name="title"
        onChange={handleChange}
      />
      <Input
        user_id="Buy newspaper"
        value={formValues.user_id}
        name="user_id"
        onChange={handleChange}
      />
      <Input
        setDate="Buy newspaper"
        value={formValues.setDate}
        name="setDate"
        onChange={handleChange}
      />
      <Button
        type="submit"
        paddingX="40px"
        variantColor="cyan"
        color="white"
        onClick={event => addTodo(event)}
      >
        Add
      </Button>
    </Stack>
  );
}

export default connect(
  state => state,
  actionCreators
)(AddTodoForm);
