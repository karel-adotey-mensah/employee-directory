import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const AccountDetails = () => {
  const logOut = () => {
    localStorage.removeItem("adminKey");
    window.location.reload();
  };

  return (
    <div>
      <Box mt={8}>
        <Button color="primary" variant="contained" onClick={logOut} fullWidth>
          Log Out
        </Button>
      </Box>
    </div>
  );
};

export default AccountDetails;
