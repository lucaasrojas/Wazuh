import React from 'react'
import { Grid } from '@mui/material'
import {ActionBar} from '../index'

const Layout : React.FunctionComponent = (props) => {
    return (
        <Grid container>
                <ActionBar />
                {props.children}
        </Grid>
    )
}

export default Layout
