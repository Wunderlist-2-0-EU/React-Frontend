// - Ability to search/find a todo

// ### Scenario 1: When there's no match for search. Show an EmptyState component

// ```jsx
// <SearchInput>
//   <SearchIcon/>
//   <Input onChange={/* Update the state */} />
//   {/* CloseIcon only shows when you've typed sth */}
//   <CloseIcon onClick={/* clear the text in Input & return to initial state/view */} />
// </SearchInput>

// <SearchText> Searching for "{/* what was typed*/}" </SearchText>

// <NoResult>
//   <Illustration src={/* url of the illustration */}/>
//   <Text>No result for "{/* search text */}"</Text>
// </NoResult>r
// ```

// ###

// Scenario 2: When there's a match

// ```jsx
// <SearchInput>
//   <SearchIcon/>
//   <Input onChange={/* Update the state */} />
//   {/* CloseIcon only shows when you've typed sth */}
//   <CloseIcon onClick={/* clear the text in Input & return to initial state/view */} />
// </SearchInput>

// <SearchText> Searching for "{/* what was typed*/}" </SearchText>
// <TodoList />
// ```

import React, { useState } from 'react';
import { Input, Button, Stack } from "@chakra-ui/core";
import { connect } from 'react-redux';


function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = event => {
        debugger
    }

    return (
      <Stack isInline marginX="auto" maxWidth="500px">
        <Input
            type="text"
            placeholder="Search Here..."
            value={searchTerm}
            focusBorderColor="cyan.500"
            onChange={handleChange}
        />
        <Button 
            type="submit" 
            paddingX="40px" 
            variantColor="cyan" 
            color="white"
            onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
    );
  }
  
//   export default SearchForm;

  export default connect()(SearchForm);
