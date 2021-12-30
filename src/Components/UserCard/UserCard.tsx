
import React from 'react';
import { CardContent, Typography, Paper, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import UserInterface from 'Assets/Interfaces/UserInterface'
import useClasses from './styles'

interface UserCardProps {
    user: UserInterface
}

const UserCard : React.FunctionComponent<UserCardProps> = (props) => {
    const classes = useClasses()

    return props.user ? (
        <Link to={`/users/${props.user.id}`} className={classes.wrapper}>
            <Paper elevation={4} className={classes.paper}>
                <CardContent>
                    <Typography variant="h6" className={classes.nameLabel} >
                        <strong>{props.user.name}</strong>
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography sx={{ mb: 1.5 }} className={classes.label} color="text.secondary">
                        @{props.user.username}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} className={classes.label} color="text.secondary">
                        {props.user.email}
                    </Typography>
                </CardContent>
            </Paper>
        </Link>
    ) : <></>
}

export default UserCard;
