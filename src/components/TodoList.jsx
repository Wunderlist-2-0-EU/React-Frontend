import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actionCreators";
import Container from "./Container";
import EditTodoForm from "./EditTodoForm";
import LeftNavigation from "./LeftNavigation";
import SearchForm from "./SearchForm";
import * as actionCreators from "../actionCreators";
import Todo from "./Todo";
import { Flex, Spinner, Text } from "@chakra-ui/core";

const Loading = () => (
  <Flex align="center" justify="center" padding="40px">
    <Spinner color="cyan.500" />
    <Text ml={4}>Loading Todolist</Text>
  </Flex>
);

const TodoList = props => {
  useEffect(() => {
    props.getTaskList();
  }, []);

  if (props.taskList.isFetching) {
    return <Loading />;
  }

  return (
    <div>
      {props.taskList.taskList.map(todo => (
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

      {/* <Link to="/">
        <button onClick={() => dispatch(logout())}>Logout</button>
      </Link> */}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(TodoList);
