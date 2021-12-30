import React from 'react'
import useClasses from './styles'

const Layout : React.FunctionComponent = (props) => {
    const classes = useClasses()
    return (
        <div className={classes.wrapper}>
                {props.children}
        </div>
    )
}

export default Layout
