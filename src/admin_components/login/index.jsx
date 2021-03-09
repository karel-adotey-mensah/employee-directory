import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Form from "../../global_components/utils/Form";
const axios = require("axios");

const Login = () => {
  /* -------------------------------------------------------------------------- */
  /*          O B J E C T   V A L U E S   F O R   F O R M I K   H O O K         */
  /* -------------------------------------------------------------------------- */
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  /* -------------------------------------------------------------------------- */
  /*       S U B M I T    F U N C T I O N   F O R   F O R M I K   H O O K       */
  /* -------------------------------------------------------------------------- */
  const adminLogin = async (userInput) => {
    const { email, password } = userInput;
    const response = await axios({
      method: "post",
      url: "https://employee-directory-api667.herokuapp.com/api/admin/login",
      data: {
        email: email.toLowerCase(),
        password: password,
      },
    });
    console.log(response);
    if (response.data.data) {
      const {
        firstName,
        lastName,
        email: responseEmail,
      } = response.data.data[0];

      response.data.token &&
        localStorage.setItem("adminKey", response.data.token);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", responseEmail);
    }
    window.location.reload();
  };

  /* -------------------------------------------------------------------------- */
  /*                      F O R M I K   F O R M   L O G I C                     */
  /* -------------------------------------------------------------------------- */
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      adminLogin(values);
    },
  });

  const fieldMeta = [
    {
      label: "Email Address",
      name: "email",
      value: formik.values.email,
      error: formik.touched.email && Boolean(formik.errors.email),
      helperText: formik.touched.email && formik.errors.email,
    },
    {
      isPassword: true,
      label: "Password",
      name: "password",
      value: formik.values.password,
      error: formik.touched.password && Boolean(formik.errors.password),
      helperText: formik.touched.password && formik.errors.password,
    },
  ];

  const buttonMeta = [{ text: "Log In", onClick: formik.handleSubmit }];

  return (
    <div>
      <Form
        // header="Login."
        subheader="Log In For Full Access."
        fieldMeta={fieldMeta}
        buttonMeta={buttonMeta}
        handleChange={formik.handleChange}
      />
    </div>
  );
};
export default Login;
