import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";
import Todo from "./Todo";
import { Flex, Spinner, Text, Stack } from "@chakra-ui/core";
import { SubtleButton1, SubtleButton2 } from "./CustomButtons";
import DeleteTodo from "./DeleteTodo";
import { useHistory, useRouteMatch } from "react-router-dom";

const Loading = () => (
  <Flex align="center" justify="center" padding="40px">
    <Spinner color="cyan.500" />
    <Text ml={4}>Loading Todolist</Text>
  </Flex>
);

const TodoList = props => {

  const history = useHistory();
  const match = useRouteMatch();
  // debugger;
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
    <>
    <div>
      {props.displayedTasks.state
      .filter(task => props.searchTerm ? task.task.includes(props.searchTerm) : true)
      .filter(task => !task.completed)
      .map(todo => (
        <Todo
          key={todo.id}
          task={todo.task}
          isChecked={todo.completed}
          onDelete={() => {
            props.deleteTask(todo.id);
          }}
          onEdit={() => {
            history.push(`${match.path}/edit/${todo.id}`);
          }}
          onCheck={() => {
            const newTodo = {
              ...todo,
              completed: !todo.completed
            };
            props.EditTask(newTodo);
          }}
        />
      ))}
    </div>
    </>
  );
};

export default connect(
  state => state,
  actionCreators
)(TodoList);
