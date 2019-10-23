import React from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/core';
import { logout } from '../actionCreators';

const Navigation = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className='navigation'>
      <Heading className='navigation__title'>Wunderlist-2.0</Heading>
      <SearchForm 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Link to='/'>
        <button className='logout' onClick={() => logout()}>
          Logout
        </button>
      </Link>
    </nav>
  );
};

export default Navigation;
