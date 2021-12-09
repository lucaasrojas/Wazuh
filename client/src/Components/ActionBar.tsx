import React from 'react'
import { Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const ActionBar : React.FunctionComponent  = () => {
    return (
        <Grid item xs={12} md={12} style={{display: "flex", justifyContent: "center"}}>
            <Link to="/users"><Button variant="text">Users</Button></Link>
            <Link to="/tasks"><Button variant="text">Tasks</Button></Link>
        </Grid>
    )
}

export default ActionBar
