import React from 'react';
import { Stack, Text, Box } from "@chakra-ui/core";
import { connect } from 'react-redux';
import Todo from './Todo';


function SearchResults(props) {
    return (
        <Stack marginX="auto" maxWidth="500px">
            <h2>Searching for {props.searchTerm}</h2>
                <ul>
            {
            props.searchResults.map(result => {
            return (
            <li>{result.task}</li>
            );
            })
            }
            </ul>
        </Stack>
    );
}

export default connect()(SearchResults);