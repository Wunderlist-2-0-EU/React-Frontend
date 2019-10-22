import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actionCreators";
import Container from "./Container";
import EditTodoForm from "./EditTodoForm";
import LeftNavigation from "./LeftNavigation";
import SearchForm from "./SearchForm";

const TodoList = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <SearchForm />
      </div>
      <div style={{display: 'flex'}}>
        <div>
          <LeftNavigation />
        </div>
        <div>
          <Container />
        </div>
        <div>
          <EditTodoForm />
        </div>
      </div>
      <div>
        <Link to="/">
          <button onClick={() => dispatch(logout())}>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default TodoList;
