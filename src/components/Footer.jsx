import React from "react"
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Footer = (props) => {
        return(
            <Box width={1} textAlign="center">
                <Divider />
                <Box px={24} mt={2} mb={4}>
                    <Grid
                    container
                    item
                    justify="center"
                    alignItems="center" >
                        <Grid item md={4} spacing={0} alignItems="center">
                            <Typography variant="h2">{props.employeeCount}</Typography>
                            <Typography variant="caption">EMPLOYEES</Typography>
                        </Grid>
                        <Grid item md={4} spacing={0}>
                            <Typography variant="h2">9</Typography>
                            <Typography variant="caption">DEPARTMENTS</Typography>
                        </Grid>
                        <Grid item md={4} spacing={0}>
                            <Typography variant="h2">1</Typography>
                            <Typography variant="caption">HOUSE</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box mx={24}><Divider variant="middle"/></Box>
                <Box my={2}>
                    <Grid
                    container
                    item
                    justify="center"
                    alignItems="center" >
                        Play for the name in front, and they'll remember the name at the back
                    </Grid>
                </Box>
            </Box>
        )
    
}

export default Footer