import React from "react";
import Login from "../../admin_components/login";
import AccountDetails from "../../admin_components/admin";
import EmployeeCreator from "../../admin_components/employee_creator";

const Admin = () => {
  const adminKey = localStorage.getItem("adminKey");

  if (adminKey) {
    return (
      <div>
        <EmployeeCreator />
        <AccountDetails />
      </div>
    );
  }

  return (
    <div>
      <Login />
    </div>
  );
};

export default Admin;
