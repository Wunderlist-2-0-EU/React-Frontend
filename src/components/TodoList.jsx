import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";
import Todo from "./Todo";
import { Flex, Spinner, Text, Stack } from "@chakra-ui/core";
import { SubtleButton1, SubtleButton2 } from "./CustomButtons";
import DeleteTodo from "./DeleteTodo";

const Loading = () => (
  <Flex align="center" justify="center" padding="40px">
    <Spinner color="cyan.500" />
    <Text ml={4}>Loading Todolist</Text>
  </Flex>
);

const TodoList = props => {
  const { task, isChecked, onDelete, onEdit, onCheck } = props;
  const [isOpen, setIsOpen] = useState();

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    props.getTaskList();
  }, []);

  if (props.tasks.isFetching) {
    return <Loading />;
  }

  return (
    <div>
      {props.tasks.taskList.map(todo => (
        <Todo
          key={todo.id}
          task={todo.task}
          isChecked={todo.completed}
          onDelete={() => {
            props.deleteTask(todo.id);
          }}
          onCheck={() => {
            const newTodo = {
              ...todo,
              completed: !todo.completed
            };
            props.editTask(newTodo);
          }}
        />
      ))}

      <Stack isInline spacing="50px" marginTop="30px">
        <SubtleButton1>Mark Completed</SubtleButton1>
        <SubtleButton2 onClick={onOpen}>Delete</SubtleButton2>

        <DeleteTodo isOpen={isOpen} onClose={onClose} onConfirm={onDelete} />
      </Stack>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(TodoList);
