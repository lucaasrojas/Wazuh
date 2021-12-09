
import React from 'react';
import { CardContent, Typography, Paper, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import UserInterface from 'Assets/Interfaces/UserInterface'

const useStyles = makeStyles({
    wrapper: {
        textDecoration: "none",
    },
    paper: {
        "&:hover": {
            backgroundColor: "#EBEBEB",
            transform: "scale(1.03)",
            transition: 'transform .4s ease-in-out, background-color .4s ease-in-out'
        },
        textAlign: "center"
    },
    divider: {
        margin: "10px 0px"
    },
    nameLabel: {
        fontSize: "100%", maxWidth: "100%"
    }
})

interface UserCardProps {
    user: UserInterface
}

const UserCard : React.FunctionComponent<UserCardProps> = (props) => {
    const classes = useStyles()

    return props.user ? (
        <Link to={`/users/${props.user.id}`} className={classes.wrapper}>
            <Paper elevation={4} className={classes.paper}>
                <CardContent>
                    <Typography variant="h6" className={classes.nameLabel} >
                        <strong>{props.user.name}</strong>
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        @{props.user.username}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.user.email}
                    </Typography>
                </CardContent>
            </Paper>
        </Link>
    ) : <></>
}

export default UserCard;
