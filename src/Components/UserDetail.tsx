import React from 'react';
import { CardContent, Typography, Paper, Divider, Grid } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { TaskCard } from '.'
import EmailIcon from '@mui/icons-material/Email';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PublicIcon from '@mui/icons-material/Public';
import * as api from '../Api/index'
import TaskInterface from 'Assets/Interfaces/TaskInterface'
import UserInterface from 'Assets/Interfaces/UserInterface'
interface DataCardInterface {
    icon: React.ReactElement,
    text: string | React.ReactElement
}

const DataCard : React.FunctionComponent<DataCardInterface> = ({ icon, text }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2} md={2}>
                {icon}
            </Grid>
            <Grid item xs={10} md={10}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {text}
                </Typography>
            </Grid>
        </Grid>

    )
}

interface QueryParams {
    id: string
}

const UserDetail = () => {
    const [userData, setUserData] = React.useState<UserInterface | undefined>()
    const [userTasks, setUserTasks] = React.useState<TaskInterface[]>([])
    const params : QueryParams = useParams()
    React.useEffect(() => {
        api.getUserById({ id: params.id })
            .then(res => setUserData(res))

        api.getTasksByUser({ id: params.id })
            .then(res => setUserTasks(res.data))
    }, [])


    return userData ? (

        <Grid container style={{ maxWidth: 480, margin: "0 auto", justifyContent: "center" }}>
            <Grid item xs={12} md={12}>
                <Typography variant="h6" style={{ fontSize: "100%", maxWidth: "100%" }} >
                    <strong>{userData.name}</strong>
                </Typography>
                <Divider style={{ margin: "10px 0px" }} />
            </Grid>

            <Grid item xs={12} md={12}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/* {translate('contributor.fields.followers')}: {props.contributor.followers} */}
                    @{userData.username}
                </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
                <DataCard icon={<EmailIcon />} text={userData.email} />
            </Grid>

            <Grid item xs={12} md={6}>
                <DataCard icon={<PersonalVideoIcon />} text={<a style={{ textDecoration: "none", color: "inherit" }} href={userData.website}>{userData.website}</a>} />
            </Grid>

            <Grid item xs={12} md={6}>
                <DataCard icon={<ApartmentIcon />} text={userData.company.name} />
            </Grid>

            <Grid item xs={12} md={6}>
                <DataCard icon={<PublicIcon />} text={userData.address.city} />

            </Grid>
            <Grid item container spacing={3} xs={12} md={12}>
                <Grid item xs={12} md={12}>
                    <Typography>
                        Tasks
                    </Typography>
                </Grid>
                {
                    userTasks.map((task : TaskInterface) => (
                        <Grid key={task.id} item xs={12} md={6}>
                            <TaskCard task={task} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    ) : <></>
}

export default UserDetail
