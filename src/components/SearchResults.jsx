import React from 'react';
import { Stack } from '@chakra-ui/core';
import { connect } from 'react-redux';

function SearchResults(props) {
  return (
    <Stack marginX='auto' maxWidth='500px'>
      <h2>Searching for {props.searchTerm}</h2>
      <ul>
        {props.searchResults.map(result => {
          return <li key={result.id}>{result.task}</li>;
        })}
      </ul>
    </Stack>
  );
}

export default connect()(SearchResults);
