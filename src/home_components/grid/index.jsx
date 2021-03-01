import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SmallCard from "./SmallCard";
import Spinner from "../../global_components/utils/Spinner";

const SmallCardGrid = (props) => {
  return (
    <Box mx={12} mb={12}>
      <Paper variant="outlined">
        <Box py={4} px={6}>
          <Grid container spacing={4} justify="center" alignItems="center">
            {props.isLoading ? (
              <Spinner />
            ) : (
              props.employeeData?.map((individualData) => (
                <SmallCard
                  employeeData={individualData}
                  key={individualData._id}
                />
              ))
            )}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default SmallCardGrid;
