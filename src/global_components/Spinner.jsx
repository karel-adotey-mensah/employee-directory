import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  return (
    <div>
      <Box mx={82} mb={6} mt={2}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Spinner;
