- Ability to mark as complete

```jsx
<Todo onClick={/* Show the TodoForm */}>
  <Group>
    <CompleteToggle onClick={/* Mark as complete/incomplete */}/>
    <TodoText>This is the todo text<TodoText>
  </Group>

  <DeleteButton onClick={/* delete modal pops */} />
  <DeleteModal>
    <Text>Are you sure you want to delete</Text>
    <Button>Yes, Delete</Button>
    <Button>Cancel</Button>
  </DeleteModal>
</Todo>
```

- Ability to clear a completed todo

```jsx
  <Todo/>
  <Button onClick={/* Clears the marked todo*/}>Clear Completed</Button>
```