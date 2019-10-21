- Ability to search/find a todo

### Scenario 1: When there's no match for search. Show an EmptyState component

```jsx
<SearchInput>
  <SearchIcon/>
  <Input onChange={/* Update the state */} />
  {/* CloseIcon only shows when you've typed sth */}
  <CloseIcon onClick={/* clear the text in Input & return to initial state/view */} />
</SearchInput>

<SearchText> Searching for "{/* what was typed*/}" </SearchText>

<NoResult>
  <Illustration src={/* url of the illustration */}/>
  <Text>No result for "{/* search text */}"</Text>
</NoResult>r
```

###

Scenario 2: When there's a match

```jsx
<SearchInput>
  <SearchIcon/>
  <Input onChange={/* Update the state */} />
  {/* CloseIcon only shows when you've typed sth */}
  <CloseIcon onClick={/* clear the text in Input & return to initial state/view */} />
</SearchInput>

<SearchText> Searching for "{/* what was typed*/}" </SearchText>
<TodoList />
```