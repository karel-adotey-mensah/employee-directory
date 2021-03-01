import React from "react";
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";

const Form = (props) => {
  return (
    <Box mx={48} my={8}>
      <Paper variant="outlined">
        <CardHeader
          align="center"
          subheader={props.subheader}
          title={props.header}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3} justify="center">
            {props.fieldMeta.map((item) => {
              return (
                <Grid item md={6} xs={12} key={item.name}>
                  <TextField
                    fullWidth
                    label={item.label}
                    name={item.name}
                    size="small"
                    onChange={props.handleChange}
                    required
                    value={item.value}
                    variant="outlined"
                    error={item.error}
                    helperText={item.helperText}
                    type={item.isPassword && "password"}
                  />
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="center" p={2}>
          {props.buttonMeta.map((item) => {
            return (
              <Box key={item.text} mx={1}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={item.onClick}
                >
                  {item.text}
                </Button>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default Form;
