import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ShortCard from "./ShortCard"

const ShortCardGrid = () => {
    const parentStyles = {
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
    }
    
    return(
        <Paper variant="outlined" children={
            <div style={parentStyles} className="scroll">
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
        </div>
        }/>
    )
}

export default ShortCardGrid