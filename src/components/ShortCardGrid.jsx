import React from "react"
import Grid from '@material-ui/core/Grid'
import ShortCard from "./ShortCard"

function ShortCardGrid(){
    const parentPadding = {
        paddingTop: 34,
        paddingBottom: 60,
        paddingLeft: 40,
        paddingRight: 40
    }
    
    return(
        <div style={parentPadding}>
            <Grid container spacing={3} justify="center" alignItems="center">
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
            </Grid>
        </div>
    )
}

export default ShortCardGrid