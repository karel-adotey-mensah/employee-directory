import React from "react";
import Login from "../../admin_components/login";
import AccountDetails from "../../admin_components/admin";

const Admin = () => {
  const adminKey = localStorage.getItem("adminKey");

  return <div>{adminKey ? <AccountDetails /> : <Login />}</div>;
};

export default Admin;
