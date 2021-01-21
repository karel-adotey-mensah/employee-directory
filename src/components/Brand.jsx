import React from "react"
import Typography from '@material-ui/core/Typography'
import { spacing } from '@material-ui/system'
import Box from '@material-ui/core/Box'

function Brand() {
    return(
        <div>
            <Typography variant="h1" align="center">
                PEOPLE AND CULTURE
            </Typography>
            <Box mb={1}>
                <Typography variant="h6" align="center">
                    <Box component="span" mr={2}>E C H O</Box>
                    <Box component="span" mr={2}>H O U S E</Box>
                    <Box component="span" mr={2}>H R</Box>
                    <Box component="span">P O R T A L</Box>
                </Typography>
            </Box>
        </div>
    )
}

export default Brand