import React from "react"
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '16px',
    '& > *': {
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
}))

function ShortCard(){
    const classes = useStyles()
    
    return(
        <Grid item md={3}>
            <Paper variant="outlined" square children={
                <div>
                    <div className={classes.root}>
                        <Avatar alt="Karel Mensah" src="" className={classes.large}/>
                    </div>
                    <h1>name: Karel Mensah</h1>
                    <h1>department: Kuulpeeps</h1>
                </div>
            }/>
        </Grid>
    )
}

export default ShortCard