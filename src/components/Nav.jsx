import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { fade, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link as RouterLink } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

function Nav() {
    const classes = useStyles()
    const isMobile = useMediaQuery('(max-width:600px)')

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            {
            isMobile &&
              <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
              >
                  <MenuIcon />
              </IconButton>
            }
            
            <Typography className={classes.title} noWrap>
              <ButtonGroup variant="text" size="large" color="default" fullWidth={true}>
                <Button component={RouterLink} to="/">
                  HOME
                </Button>
                
                <Button component={RouterLink} to="/contracts">
                  CONTRACTS
                </Button>
                
                <Button component={RouterLink} to="/leave-requests">
                  LEAVE REQUESTS
                </Button>

                <Button component={RouterLink} to="/add-employee">
                  ADD EMPLOYEE
                </Button>
              </ButtonGroup>
            </Typography>

            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Nav