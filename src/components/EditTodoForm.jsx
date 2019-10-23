import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Box,
  Stack,
  Flex,
  FormErrorMessage,
  Checkbox
} from "@chakra-ui/core";
import { withFormik, Field, Form } from "formik";
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";
import * as yup from "yup";

export function EditTodoForm(props) {
  //   debugger;
  return (
    <Form>
      <Field
        name="task"
        render={({ field, form }) => (
          <FormControl
            isInvalid={form.errors[field.name] && form.touched[field.name]}
          >
            {/* <FormLabel htmlFor="task">First name</FormLabel> */}
            <Input {...field} id="task" placeholder="Enter task" />
            <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
          </FormControl>
        )}
      />
      <Field
        name="setDate"
        render={({ field, form }) => (
          <FormControl
            isInvalid={form.errors[field.name] && form.touched[field.name]}
          >
            <FormLabel htmlFor="set-date">Due </FormLabel>
            <Input
              {...field}
              type="date"
              id="set-date"
              placeholder="Enter due date"
              maxWidth="180px"
            />
            <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
          </FormControl>
        )}
      />
      <Field
        name="completed"
        render={({ field, form }) => (
          <FormControl
            isInvalid={form.errors[field.name] && form.touched[field.name]}
          >
            <FormLabel htmlFor="set-date">Completed?</FormLabel>
            <Checkbox id="completed" isChecked={field.value} {...field} />
            <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
          </FormControl>
        )}
      />
      <Field
        name="notes"
        render={({ field, form }) => (
          <FormControl
            isInvalid={form.errors[field.name] && form.touched[field.name]}
          >
            <FormLabel htmlFor="repeat">No Repeat</FormLabel>
            <Select id="repeat" placeholder="No Repeat" {...field}>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </Select>
            <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
          </FormControl>
        )}
      />

      <Button type="submit" paddingX="40px" variantColor="cyan" color="white">
        Save
      </Button>
      <Button
        onClick={() => {
          props.history.push("/todoapp");
        }}
      >
        Cancel
      </Button>
    </Form>
  );
}

const EditTodoFormik = withFormik({
  mapPropsToValues({ title, task, setDate, completed, ...props }) {
    const { id } = props.match.params;
    const store = props.tasks.taskList;
    const taskData = store.find(task => task.id === Number(id));
    if (!taskData) {
      return {
        title: title || "",
        task: task || "",
        setDate: setDate || "",
        completed: completed || false
      };
    }
    return {
      ...taskData,
      title: title || taskData.title,
      task: task || taskData.task,
      setDate: setDate || taskData.setDate,
      completed: completed || taskData.completed || false
    };
  },
  enableReinitialize: true,
  validationSchema: yup.object().shape({
    title: yup.string().required("Please enter a title"),
    task: yup.string().required("Please enter your todo"),
    setDate: yup.date().required("please set the due date"),
    completed: yup.bool()
  }),
  handleSubmit(values, { props }) {
    props.EditTask(values);
    props.history.push("/todoapp");
  }
})(EditTodoForm);

export default connect(
  state => state,
  actionCreators
)(EditTodoFormik);
