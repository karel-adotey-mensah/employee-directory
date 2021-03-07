import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/box";
import Grid from "@material-ui/core/grid";
import Paper from "@material-ui/core/paper";
import TextField from "@material-ui/core/textfield";

const ImageUploader = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }));
  const classes = useStyles();

  return (
    <Box px={2}>
      <Paper variant="outlined">
        <Grid container justify="center">
          <Grid item md={12} xs={12}>
            <Box display="flex" justifyContent="center" py={1}>
              <Avatar alt="" className={classes.large} src={props.imageUrl} />
            </Box>
          </Grid>
          <Grid item md={12} xs={12}>
            <Box display="flex" justifyContent="center" pb={1} px={1}>
              <TextField
                name="imageUrl"
                size="small"
                onChange={props.uploadImage}
                required
                variant="outlined"
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ImageUploader;
