// <<<<<<< liam-sutton
// import React, { useState } from 'react';
// import { Input, Button, Stack } from '@chakra-ui/core';
// import { connect } from 'react-redux';

// import * as actionCreators from '../actionCreators';

// const initialFormValues = { title: '', user_id: '', setDate: '', task: '' };

// export function AddTodoForm({ addTask }) {
//   const [formValues, setFormValues] = useState(initialFormValues);

//   const handleChange = event => {
//     setFormValues({ ...formValues, [event.target.name]: event.target.value });
//   };

//   const addTodo = event => {
//     event.preventDefault();
//     addTask(formValues);
//     setFormValues(initialFormValues);
//   };

//   return (
//     <Stack isInline marginX='auto' maxWidth='500px'>
//       <Input
//         type='text'
//         title='Buy newspaper'
//         placeholder='Title'
//         value={formValues.title}
//         name='title'
//         onChange={handleChange}
//       />
//       <Input
//         type='text'
//         placeholder='Task'
//         value={formValues.task}
//         focusBorderColor='cyan.500'
//         name='task'
//         onChange={handleChange}
//       />
//       <Input
//         placeholder='User_ID'
//         type='number'
//         user_id='Buy newspaper'
//         value={formValues.user_id}
//         name='user_id'
//         onChange={handleChange}
//       />
//       <Input
//         placeholder='Date'
//         type='text'
//         setDate='Buy newspaper'
//         value={formValues.setDate}
//         name='setDate'
//         onChange={handleChange}
//       />
//       <Button
//         type='submit'
//         paddingX='40px'
//         variantColor='cyan'
//         color='white'
//         onClick={event => addTodo(event)}
//       >
//         Add
//       </Button>
//     </Stack>
// =======
// import React from "react";
// import { Input, Button, Stack } from "@chakra-ui/core";

// function AddTodoForm(props) {
//   const { todo } = props;
//   return (
//     <Stack isInline marginX="auto" maxWidth="500px">
//       <Input
//         type="text"
//         placeholder="Add Task..."
//         value={todo}
//         focusBorderColor="cyan.500"
//       />
//       <Button type="submit" paddingX="40px" variantColor="cyan" color="white">
//         Add
//       </Button>
//     </Stack>
//   );
// }

// export default AddTodoForm;

import React, { useState } from "react";
import { Input, Button, Flex, Stack, Box } from "@chakra-ui/core";
import { connect, useDispatch } from "react-redux";
import { withFormik, Field, Form } from "formik";
import * as yup from "yup";

import * as actionCreators from "../actionCreators";
// import { register } from "../serviceWorker";
// import { ADD_TASK } from "../actionTypes";

export function AddTodoForm(props) {
  // debugger;
  const { todo, addTask } = props;
  // const dispatch = useDispatch();
  // const [formValues, setFormValues] = useState({
  //   title: "A",
  //   user_id: 42,
  //   setDate: "C",
  //   task: "D"
  // });
  // const handleChange = event => {
  //   setFormValues({ ...formValues, [event.target.name]: event.target.value });
  // };

  // const addTodo = event => {
  //   debugger;
  //   addTask(formValues);
  // };

  return (
    <Form>
      <Stack direction="row" spacing="24px">
        <Box flex="1">
          <Field
            name="task"
            render={props => (
              <Input
                mb="16px"
                placeholder="Add Task..."
                focusBorderColor="cyan.500"
                {...props.field}
              />
            )}
          />

          <Stack isInline>
            <Field
              name="title"
              render={props => (
                <Input
                  placeholder="Add Title Here"
                  focusBorderColor="cyan.500"
                  {...props.field}
                />
              )}
            />

            <Box size="24px" />

            <Field
              name="setDate"
              render={props => (
                <Input
                  type="date"
                  placeholder="Set due date"
                  focusBorderColor="cyan.500"
                  {...props.field}
                />
              )}
            />
          </Stack>
        </Box>

        <Button type="submit" paddingX="40px" variantColor="cyan" color="white">
          Add
        </Button>
      </Stack>
    </Form>
// >>>>>>> master
  );
}
//function that get's today's date in the format YYYY-MM-DD
function getTodayDate() {
  const today = new Date();
  const formattedDate = today.toISOString().substr(0, 10);
  return formattedDate;
}

const AddTodoFormik = withFormik({
  mapPropsToValues({ title, task, setDate }) {
    return {
      title: title || "",
      task: task || "",
      setDate: setDate || getTodayDate() //sets the default date
    };
  },
  validationSchema: yup.object().shape({
    title: yup.string().required("Please enter a title"),
    task: yup.string().required("Please enter your todo"),
    setDate: yup.date().required("please set the due date")
  }),
  handleSubmit(values, { props, resetForm }) {
    // Step 1: Get the user_id from localStorage
    const userID = localStorage.getItem("userID");

    // Step 2: Create the todo object the way the endpoint requires
    const newTodo = {
      title: values.title,
      task: values.task,
      setDate: values.setDate,
      user_id: Number(userID)
    };

    // Step 3: Call the action to add task, which is in props
    props.addTask(newTodo);

    // Step 4: Reset the form
    resetForm();
  }
})(AddTodoForm);

export default connect(
  state => state,
  actionCreators
// <<<<<<< liam-sutton
// )(AddTodoForm);
// =======
)(AddTodoFormik);
// >>>>>>> master
