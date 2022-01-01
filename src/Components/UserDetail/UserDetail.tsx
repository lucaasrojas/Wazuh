import React from 'react';
import { Typography, Divider, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { TaskCard } from '..'
import EmailIcon from '@mui/icons-material/Email';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PublicIcon from '@mui/icons-material/Public';
import * as api from '../../Api/index'
import TaskInterface from '../../Assets/Interfaces/TaskInterface'
import UserInterface from '../../Assets/Interfaces/UserInterface'
import useClasses from './styles'

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
    id?: string
}

const UserDetail : React.FunctionComponent = (props) => {

    const [userData, setUserData] = React.useState<UserInterface | void | undefined>()
    const [error, setError] = React.useState<any | undefined>()
    const [userTasks, setUserTasks] = React.useState<TaskInterface[]>([])
    const params : QueryParams = useParams()
    const classes = useClasses()
    React.useEffect(() => {
        api.getUserById({ id: params.id })
            .then(res => setUserData(res.data))
            .catch(({response}) => setError(response.data))

        api.getTasksByUser({ id: params.id })
            .then(res => setUserTasks(res.data))
    }, [])
    console.log("MAIN ERROR", error)
    if(error) return (
        <div>
            Error: {error.message}
        </div>
    )

    return userData ? (

        <Grid container className={classes.mainWrapper}>
            <Grid item xs={12} md={12}>
                <Typography variant="h6" className={classes.userName} >
                    <strong>{userData.name}</strong>
                </Typography>
                <Divider className={classes.divider} />
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
                <DataCard icon={<PersonalVideoIcon />} text={<a className={classes.personalVideoText} href={userData.website}>{userData.website}</a>} />
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
