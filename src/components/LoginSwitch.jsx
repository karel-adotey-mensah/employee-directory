import React from "react"
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const LoginSwitch = (props) => {
    const GreenSwitch = withStyles((theme) => ({
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: theme.spacing(1),
        },
        switchBase: {
          padding: 1,
          '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
              backgroundColor: '#52d869',
              opacity: 1,
              border: 'none',
            },
          },
          '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 26 / 2,
          border: `1px solid ${theme.palette.grey[400]}`,
          backgroundColor: theme.palette.grey[50],
          opacity: 1,
          transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
      }))(({ classes, ...props }) => {
        return (
          <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            {...props}
          />
        )
      })
      
    return(
        <Box mt={4} mr={10}>
            <Grid container justify="flex-end">
                <Grid item > 
                    <FormControlLabel
                    control={
                        <GreenSwitch
                            checked={props.isLoggedIn}
                            // onChange={handleChange}
                            name="loginSwitch"
                            color="primary"
                            size="medium" />
                    }
                    label={ props.isLoggedIn ?
                            <Typography>
                                <Box
                                    component="span"
                                    mx={2}
                                    letterSpacing={6}
                                    fontWeight="fontWeightMedium"
                                    >You are currently logged in as Administrator
                                </Box>
                            </Typography> :
                            <Typography>
                                <Box
                                    component="span"
                                    mx={2}
                                    letterSpacing={6}
                                    fontWeight="fontWeightMedium"
                                    >Log in for full access
                                </Box>
                            </Typography> }
                    labelPlacement="start"
                />
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginSwitch