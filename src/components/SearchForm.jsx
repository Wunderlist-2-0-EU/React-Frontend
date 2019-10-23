import React, { useState } from 'react';
import { Input, Stack } from '@chakra-ui/core';
import { connect } from 'react-redux';
import SearchResults from './SearchResults';

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(props.tasks.taskList);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    setSearchResults(
      props.tasks.taskList.filter(todo =>
        todo.task.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
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

export default connect(state => state)(SearchForm);
