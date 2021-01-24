import React from "react"
import Box from '@material-ui/core/Box'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import { fade, makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl' 
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(5),
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

const SearchAndFilter = (props) => {
    const classes = useStyles()
    
    return(
        <div className={classes.root}>
          {/* <Paper elevation={0}> */}
            <ButtonGroup variant="text" size="large">
                <Box px={2}>
                  <FormControl>
                    <Select
                      labelId="active-department-label"
                      id="active-department"
                      name="filter"
                      defaultValue="allDepartments"
                      variant="outlined"
                      value={props.filterValue}
                      onChange={props.changeFilterValue}
                    >
                      <MenuItem value={"allDepartments"}>
                        <Typography variant="h6">
                                      E C H O  H O U S E 
                        </Typography>
                      </MenuItem>
                      <MenuItem value={"Admin"}>
                        <Typography variant="h6">
                                      A D M I N
                        </Typography>
                      </MenuItem>
                      <MenuItem value={"Digit"}>
                        <Typography variant="h6">
                                      D I G I T
                        </Typography>
                      </MenuItem>
                      <MenuItem value={"Kuulpeeps"}>
                        <Typography variant="h6">
                                      K U U L P E E P S 
                        </Typography>
                      </MenuItem>
                      <MenuItem value={"Projects"}>
                        <Typography variant="h6">
                                      P R O J E C T S
                        </Typography>
                      </MenuItem>
                      <MenuItem value={"StoryBoard"}>
                        <Typography variant="h6">
                                      S T O R Y B O A R D
                        </Typography>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box px={2} pt={2.5}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        name="search"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        value={props.searchValue}
                        onChange={props.changeSearchValue}
                        />
                    </div>
                </Box>
            </ButtonGroup>
          {/* </Paper> */}
        </div>
    )
}

export default SearchAndFilter