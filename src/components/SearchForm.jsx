import React, { useState } from 'react';
import { Input, Stack } from '@chakra-ui/core';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import SearchResults from './SearchResults';

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);

    props.filterBySearchTerm(searchTerm);
  };

  return (
    <>
      <Stack className='todo__search'>
        <Input
          className='todo__search-input'
          type='text'
          placeholder='Search Here...'
          value={searchTerm}
          focusBorderColor='cyan.500'
          onChange={handleChange}
        />
      </Stack>
      {/*<SearchResults searchTerm={searchTerm} searchResults={searchResults} />*/}
    </>
  );
}

export default connect(
  state => state,
  actionCreators
)(SearchForm);
