import React from "react";
import Login from "../admin_components/Login";
import AccountDetails from "../admin_components/AccountDetails";

const Admin = () => {
  const adminKey = localStorage.getItem("adminKey");

  return <div>{adminKey ? <AccountDetails /> : <Login />}</div>;
};

export default Admin;
