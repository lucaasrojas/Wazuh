
import React from 'react';
import { Typography, Paper, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import UserInterface from '../../Assets/Interfaces/UserInterface'
import useClasses from './styles'

interface UserCardProps {
    user: UserInterface
}

const UserCard: React.FunctionComponent<UserCardProps> = (props) => {
    const classes = useClasses()

    return props.user ? (
        <Link to={`/users/${props.user.id}`} className={classes.wrapper}>
            <Paper elevation={4} className={classes.paper}>
                <div className={classes.card}>
                    <div className={classes.titleWrapper}>
                        <Typography variant="h6" className={classes.nameLabel} >
                            <strong>{props.user.name}</strong>
                        </Typography>
                        <Divider className={classes.divider} />
                    </div>
                    <div className={classes.cardContent}>
                        <Typography sx={{ mb: 1.5 }} className={classes.label} color="text.secondary">
                            @{props.user.username}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} className={classes.label} color="text.secondary">
                            {props.user.email}
                        </Typography>
                    </div>
                </div>
            </Paper>
        </Link>
    ) : <></>
}

export default UserCard;
