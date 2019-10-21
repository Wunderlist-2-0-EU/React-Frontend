// - Ability to add a todo

// ```jsx
// <TodoInput />
// ```
import React from "react";

function AddTodoForm(props) {
  return (
    <div>
      <input type="text" placeholder="Add Task..." />
      <button>Add</button>
    </div>
  );
}

export default AddTodoForm;
