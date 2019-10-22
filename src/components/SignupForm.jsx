import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button, Text, Heading, Box, Stack } from "@chakra-ui/core";
import * as yup from 'yup';
import { register } from '../actionCreators';



const Signup = ({ errors, touched, isSubmitting }) => {
  return (
    <Form>
      <Heading size="lg" textAlign="center" color="#00B5D8">
        Sign-Up
      </Heading>
      <Stack spacing="20px" marginX="auto" maxWidth="350px">
        <Box marginTop="30px">
          {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
          <Field
            type="text"
            name="firstName"
            placeholder="Name"
            component={Input}
          />
        </Box>

        <Box>
          {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
          <Field
            type="text"
            name="lastName"
            placeholder="Surname"
            component={Input}
          />
        </Box>
        <Box>
          {errors.username && touched.username && <p>{errors.username}</p>}
          <Field
            type="text"
            name="username"
            placeholder="Username"
            component={Input}
          />
        </Box>

        <Box>
          {errors.password && touched.password && <p>{errors.password}</p>}
          <Field
            type="password"
            name="password"
            placeholder="Password"
            component={Input}
          />
        </Box>
      </Stack>

      <Button
        isDisabled={isSubmitting}
        type="submit"
        marginX="600px"
        marginTop="30px"
        variantColor="cyan"
      >
        Submit
      </Button>
      {/*<Link to='/login'>*/}

        <p>Already have an account? Login here!</p>
      </Link>
    </Form>
  );
};

const FormikSignup = withFormik({
  mapPropsToValues({ firstName, lastName, username, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: yup.object().shape({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your surname"),
    username: yup.string().required("username is required"),
    password: yup
      .string()
      .min(8, "Must be minimum 8 characters")
      .required("Password is required")
  }),
  handleSubmit(values, { props, resetForm }) {
    debugger;
    props.register(values);
    resetForm();
  }
})(Signup);

export default connect(
  null,
  { register }
)(FormikSignup);
