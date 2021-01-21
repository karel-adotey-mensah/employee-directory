import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import ShortCard from "./ShortCard"

const ShortCardGrid = () => {

    return(
        <Box mx={16}>
                <Grid container spacing={3} justify="center" alignItems="center">
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                </Grid>           
        </Box>
    )
}

export default ShortCardGrid