import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import ShortCard from "./ShortCard"

const ShortCardGrid = (props) => {

    return(
        <Box mx={16}>
                <Grid container spacing={3} justify="center" alignItems="center">
                    {props.employeeData.map(
                        individualData => <ShortCard employeeData={individualData} key={individualData._id}/>
                        )}
                </Grid>           
        </Box>
    )
}

export default ShortCardGrid