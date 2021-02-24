import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
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
      url: "http://localhost:4000/api/admin/login",
      data: {
        email: email.toLowerCase(),
        password: password,
      },
    });
    console.log(response);
    localStorage.setItem("adminKey", response.data.token);
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

  return (
    <div>
      <Box mx={52} mt={7}>
        <Paper
          variant="outlined"
          square
          children={
            <Box py={8} px={8}>
              <form onSubmit={formik.handleSubmit}>
                <Box pb={2}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>
                <Box pb={2}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Box>
                <Box mt={2} mx={20}>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    fullWidth
                  >
                    Log In
                  </Button>
                </Box>
              </form>
            </Box>
          }
        />
      </Box>
    </div>
  );
};
export default Login;
