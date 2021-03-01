import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Form from "../global_components/Form";
const axios = require("axios");

const PasswordChanger = () => {
  const token = localStorage.getItem("adminKey");

  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object({
    password: yup
      .string("First Name")
      .min(6, "Password should contain at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string("First Name")
      .min(6, "Password should contain at least 6 characters")
      .oneOf([yup.ref("password"), null], "Passwords don't match!")
      .required("Password is required"),
  });

  const changePassword = async (values) => {
    const { password, confirmPassword } = values;

    const passwordHasChanged = await axios({
      method: "put",
      url: "http://localhost:4000/api/admin/password",
      headers: { Authorization: token },
      data: {
        password: password,
        confirmPassword: confirmPassword,
      },
    });
    localStorage.setItem("adminKey", passwordHasChanged.data.token);
    window.location.reload();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      changePassword(values);
    },
  });

  const fieldMeta = [
    {
      isPassword: true,
      label: "Password",
      name: "password",
      value: formik.values.password,
      error: formik.touched.password && Boolean(formik.errors.password),
      helperText: formik.touched.password && formik.errors.password,
    },
    {
      isPassword: true,
      label: "Confirm Password",
      name: "confirmPassword",
      value: formik.values.confirmPassword,
      error:
        formik.touched.confirmPassword &&
        Boolean(formik.errors.confirmPassword),
      helperText:
        formik.touched.confirmPassword && formik.errors.confirmPassword,
    },
  ];

  const buttonMeta = [
    { text: "Change Password", onClick: formik.handleSubmit },
  ];

  return (
    <div>
      <Form
        subheader="Enter Your New Password."
        fieldMeta={fieldMeta}
        buttonMeta={buttonMeta}
        handleChange={formik.handleChange}
      />
    </div>
  );
};

export default PasswordChanger;
