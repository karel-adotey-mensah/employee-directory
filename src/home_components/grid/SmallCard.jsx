import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "16px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const SmallCard = (props) => {
  const classes = useStyles();

  return (
    <Grid item md={3}>
      <Paper
        variant="outlined"
        square
        children={
          <div>
            <div className={classes.root}>
              <Avatar
                alt={
                  props.employeeData.firstName +
                  " " +
                  props.employeeData.lastName
                }
                src=""
                className={classes.large}
              />
            </div>
            <Typography variant="subtitle1" align="center">
              {props.employeeData.department}
            </Typography>
            <Typography variant="subtitle2" align="center">
              {props.employeeData.firstName + " " + props.employeeData.lastName}
            </Typography>
          </div>
        }
      />
    </Grid>
  );
};

export default SmallCard;
