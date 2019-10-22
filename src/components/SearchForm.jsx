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
import { Input, Stack } from "@chakra-ui/core";
import { connect } from 'react-redux';
import SearchResults from './SearchResults';

const todos = [
    {
    "id": 64,
    "user_id": null,
    "title": "Lambda",
    "task": "Build Documentation",
    "notes": null,
    "setDate": "Tomorrow",
    "completed": null,
    "created_at": "2019-07-21T14:30:01.322Z",
    "updated_at": "2019-07-21T14:30:01.322Z"
    },
    {
    "id": 65,
    "user_id": null,
    "title": "Lambda",
    "task": "WEBPT8 TL",
    "notes": null,
    "setDate": "Tonight",
    "completed": null,
    "created_at": "2019-07-21T14:30:32.381Z",
    "updated_at": "2019-07-21T14:30:32.381Z"
    },
    {
    "id": 66,
    "user_id": null,
    "title": "Lambda",
    "task": "WEB20 Context Project",
    "notes": null,
    "setDate": "Tuesday",
    "completed": null,
    "created_at": "2019-07-21T14:30:48.287Z",
    "updated_at": "2019-07-21T14:30:48.287Z"
    },
    {
    "id": 67,
    "user_id": 42,
    "title": "Insomnia",
    "task": "Trying Wunderlist End Points, Edit Todo",
    "notes": null,
    "setDate": "Tuesday",
    "completed": null,
    "created_at": "2019-07-21T14:36:03.690Z",
    "updated_at": "2019-07-21T14:36:03.690Z"
    }
];

function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(todos);

    const handleChange = event => {
        setSearchTerm(event.target.value);
        setSearchResults(todos.filter(todo => todo.task.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    return (
    <>
        <Stack isInline marginX="auto" maxWidth="500px">
            <Input
                type="text"
                placeholder="Search Here..."
                value={searchTerm}
                focusBorderColor="cyan.500"
                onChange={handleChange}
            />
        </Stack>
        <SearchResults 
            searchTerm={searchTerm}
            searchResults={searchResults} 
        />
    </>
    );
  }
  
//   export default SearchForm;

  export default connect()(SearchForm);
