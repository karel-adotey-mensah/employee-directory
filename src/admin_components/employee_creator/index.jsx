import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Form from "../../global_components/utils/Form";
const axios = require("axios");

const EmployeeCreator = () => {
  const token = localStorage.getItem("adminKey");
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async (event) => {
    const imageFile = event.target.files[0];
    const toBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
    const base64Data = await toBase64(imageFile);
    const imageUrl = await axios({
      method: "post",
      url: "https://employee-directory-api667.herokuapp.com/api/employees/img",
      headers: {
        Authorization: token,
      },
      data: { base64Data: base64Data },
    });
    const { secure_url } = imageUrl.data.data;
    setImageUrl(secure_url);
    console.log(imageUrl.data.data);
  };

  const createEmployee = async (values) => {
    const {
      firstName,
      lastName,
      email,
      address,
      dateOfBirth,
      contractEnd,
      department,
      role,
    } = values;
    const newEmployee = await axios({
      method: "post",
      url: "https://employee-directory-api667.herokuapp.com/api/employees",
      headers: { Authorization: token },
      data: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        dateOfBirth: dateOfBirth,
        email: email.toLowerCase(),
        contractEnd: contractEnd,
        department: department,
        role: role,
        imageUrl: imageUrl,
      },
    });

    console.log(newEmployee);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    dateOfBirth: "2021-01-01",
    contractEnd: "2021-01-01",
    department: "",
    role: "",
    imageUrl: "",
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
      .string("Email")
      .email("Enter a valid email")
      .required("Email is required"),
    address: yup
      .string("Address")
      .min(1, "Address is empty")
      .required("Address is required"),
    department: yup
      .string("Department")
      .min(1, "Department is empty")
      .required("Department is required"),
    role: yup
      .string("Role")
      .min(1, "Role is empty")
      .required("Role is required"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createEmployee(values);
    },
  });
  const fieldMeta = [
    // {
    //   isFile: true,
    //   label: "Upload Image",
    //   name: "imageUrl",
    //   value: formik.values.imageUrl,
    //   error: formik.touched.imageUrl && Boolean(formik.errors.imageUrl),
    //   helperText: formik.touched.imageUrl && formik.errors.imageUrl,
    // },
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
      label: "Address",
      name: "address",
      value: formik.values.address,
      error: formik.touched.address && Boolean(formik.errors.address),
      helperText: formik.touched.address && formik.errors.address,
    },
    {
      isDate: true,
      label: "Date of birth",
      name: "dateOfBirth",
      value: formik.values.dateOfBirth,
      error: formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth),
      helperText: formik.touched.dateOfBirth && formik.errors.dateOfBirth,
    },
    {
      label: "Email address",
      name: "email",
      value: formik.values.email,
      error: formik.touched.email && Boolean(formik.errors.email),
      helperText: formik.touched.email && formik.errors.email,
    },
    {
      isDate: true,
      label: "Contract end date",
      name: "contractEnd",
      value: formik.values.contractEnd,
      error: formik.touched.contractEnd && Boolean(formik.errors.contractEnd),
      helperText: formik.touched.contractEnd && formik.errors.contractEnd,
    },
    {
      label: "Department",
      name: "department",
      value: formik.values.department,
      error: formik.touched.department && Boolean(formik.errors.department),
      helperText: formik.touched.department && formik.errors.department,
    },
    {
      label: "Role",
      name: "role",
      value: formik.values.role,
      error: formik.touched.role && Boolean(formik.errors.role),
      helperText: formik.touched.role && formik.errors.role,
    },
  ];
  const buttonMeta = [{ text: "Add Employee", onClick: formik.handleSubmit }];

  return (
    <div>
      <Form
        uploadsImage={true}
        uploadImage={uploadImage}
        imageUrl={imageUrl}
        fieldMeta={fieldMeta}
        buttonMeta={buttonMeta}
        handleChange={formik.handleChange}
        subheader="Add a new employee."
      />
    </div>
  );
};

export default EmployeeCreator;
