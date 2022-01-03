import React from 'react'
import { Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import useClasses from './styles'

const ActionBar : React.FunctionComponent  = () => {
    const classes = useClasses()
    return (
        <Grid item xs={12} md={12} className={classes.mainWrapper}>
            <Link to="/users"><Button variant="text">Users</Button></Link>
            <Link to="/tasks"><Button variant="text">Tasks</Button></Link>
        </Grid>
    )
}

export default ActionBar
