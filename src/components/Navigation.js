import React from "react";
import SearchForm from "./SearchForm";
import { Link, useHistory } from "react-router-dom";
import { Heading } from "@chakra-ui/core";
import { logout } from "../actionCreators";
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";

export const Navigation = ({ searchTerm, setSearchTerm }) => {
  const history = useHistory();
  return (
    <nav className="navigation">
      <Heading className="navigation__title">Wunderlist-2.0</Heading>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <button
        className="logout"
        onClick={() => {
          logout();
          history.push("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default connect(
  state => state,
  actionCreators
)(Navigation);
