import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/button";
import Box from "@material-ui/core/box";
import { useFormik } from "formik";
import * as yup from "yup";
import Form from "../../global_components/utils/Form";
import PasswordChanger from "./PasswordChanger";
const axios = require("axios");

const AccountDetails = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("adminKey");

  const [adminData, setAdminData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  //   const getAdminData = async () => {
  //     const response = await axios({
  //       method: "get",
  //       url: "https://employee-directory-api667.herokuapp.com/api/admin",
  //       headers: { Authorization: token },
  //     });
  // const { firstName, lastName, email } = response.data.data;

  //     return response;
  //   };

  /* -------------------------------------------------------------------------- */
  /*          O B J E C T   V A L U E S   F O R   F O R M I K   H O O K         */
  /* -------------------------------------------------------------------------- */
  const initialValues = {
    firstName: adminData.firstName,
    lastName: adminData.lastName,
    email: adminData.email,
  };
  const validationSchema = yup.object({
    firstName: yup
      .string("First Name")
      .min(1, "Name should contain at least one character")
      .required("Name is required"),
    lastName: yup
      .string("Last Name")
      .min(1, "Name should contain at least one character")
      .required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  /* -------------------------------------------------------------------------- */
  /*       S U B M I T    F U N C T I O N   F O R   F O R M I K   H O O K       */
  /* -------------------------------------------------------------------------- */
  const updateAdmin = async (values) => {
    const { firstName, lastName, email } = values;
    const updatedAdmin = await axios({
      method: "put",
      url: "https://employee-directory-api667.herokuapp.com/api/admin",
      headers: { Authorization: token },
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
      },
    });

    const {
      firstName: updatedFirstName,
      lastName: updatedLastName,
      email: updatedEmail,
    } = updatedAdmin.data.data[0];

    localStorage.setItem("firstName", updatedFirstName);
    localStorage.setItem("lastName", updatedLastName);
    localStorage.setItem("email", updatedEmail);
    localStorage.setItem("adminKey", updatedAdmin.data.token);
    window.location.reload();
  };

  const changePassword = () => {
    setIsChangingPassword(() => true);
  };

  const logOut = () => {
    localStorage.removeItem("adminKey");
    window.location.reload();
  };

  /* -------------------------------------------------------------------------- */
  /*                      F O R M I K   F O R M   L O G I C                     */
  /* -------------------------------------------------------------------------- */
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateAdmin(values);
    },
  });

  const fieldMeta = [
    {
      label: "First name",
      name: "firstName",
      value: formik.values.firstName,
      error: formik.touched.firstName && Boolean(formik.errors.firstName),
      helperText: formik.touched.firstName && formik.errors.firstName,
    },
    {
      label: "Last name",
      name: "lastName",
      value: formik.values.lastName,
      error: formik.touched.lastName && Boolean(formik.errors.lastName),
      helperText: formik.touched.lastName && formik.errors.lastName,
    },
    {
      label: "Email Address",
      name: "email",
      value: formik.values.email,
      error: formik.touched.email && Boolean(formik.errors.email),
      helperText: formik.touched.email && formik.errors.email,
    },
    // {
    //   isPassword: true,
    //   label: "Password",
    //   name: "password",
    //   value: formik.values.password,
    //   error: formik.touched.password && Boolean(formik.errors.password),
    //   helperText: formik.touched.password && formik.errors.password,
    // },
  ];

  const buttonMeta = [
    { text: "Update Details", onClick: formik.handleSubmit },
    { text: "Change Password", onClick: changePassword },
  ];

  return (
    <div>
      {!isChangingPassword ? (
        <div>
          <Form
            subheader="Update Your Information."
            //   subheader="This information can be edited."
            fieldMeta={fieldMeta}
            buttonMeta={buttonMeta}
            handleChange={formik.handleChange}
          />
          <Box mx="45%" mb={8}>
            <Button
              color="primary"
              variant="contained"
              onClick={logOut}
              fullWidth
            >
              Log Out
            </Button>
          </Box>
        </div>
      ) : (
        <PasswordChanger />
      )}
    </div>
  );
};

export default AccountDetails;
