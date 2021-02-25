import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Form from "../global_components/Form";
const axios = require("axios");

const AccountDetails = () => {
  const getAdminData = async () => {
    const token = localStorage.getItem("adminKey");
    const response = await axios({
      method: "get",
      url: "http://localhost:4000/api/admin",
      headers: { Authorization: token },
    });
    // const { firstName, lastName, email } = response.data.data;

    return response;
  };

  /* -------------------------------------------------------------------------- */
  /*          O B J E C T   V A L U E S   F O R   F O R M I K   H O O K         */
  /* -------------------------------------------------------------------------- */
  const initialValues = {
    firstName: "Karel",
    lastName: "Mensah",
    email: "Karelmensah96@gmail.com",
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
    // const { email, password } = userInput;
    // const response = await axios({
    //   method: "post",
    //   url: "http://localhost:4000/api/admin/login",
    //   data: {
    //     email: email.toLowerCase(),
    //     password: password,
    //   },
    // });
    // console.log(response);
    // localStorage.setItem("adminKey", response.data.token);
    // window.location.reload();
    console.log(values);
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
    { text: "Log Out", onClick: logOut },
  ];

  return (
    <div>
      <Form
        header="A D M I N I S T R A T O R"
        subheader="This information can be edited."
        fieldMeta={fieldMeta}
        buttonMeta={buttonMeta}
        handleChange={formik.handleChange}
      />
    </div>
  );
};

export default AccountDetails;
