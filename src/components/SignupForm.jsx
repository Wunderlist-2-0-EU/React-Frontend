import React from "react";
import { withFormik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Button, Text, Heading, Box, Stack } from "@chakra-ui/core";
import * as yup from "yup";
import { register } from "../actionCreators";

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
            name="firstName"
            render={props => <Input placeholder="Name" {...props.field} />}
          />
        </Box>

        <Box>
          {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
          <Field
            name="lastName"
            render={props => <Input placeholder="Surname" {...props.field} />}
          />
        </Box>
        <Box>
          {errors.username && touched.username && <p>{errors.username}</p>}
          <Field
            name="username"
            render={props => <Input placeholder="Username" {...props.field} />}
          />
        </Box>

        <Box>
          {errors.password && touched.password && <p>{errors.password}</p>}
          <Field
            name="password"
            render={props => (
              <Input placeholder="Password" type="password" {...props.field} />
            )}
          />
        </Box>
      </Stack>

      <Button
        isLoading={isSubmitting}
        // isFullWidth
        type="submit"
        marginX="600px"
        marginTop="30px"
        variantColor="cyan"
      >
        Submit
      </Button>
      {/*<Link to='/login'>*/}

      <Text marginX="auto" maxWidth="350px">
        Already have an account? Login here!
      </Text>
      {/* </Link> */}
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
    // debugger;
    props.register(values);
    resetForm();
  }
})(Signup);

export default connect(
  null,
  { register }
)(FormikSignup);
