import React from 'react';
import { Grid } from '@mui/material'
import TaskInterface from 'Assets/Interfaces/TaskInterface'
import useClasses from './styles'

interface TaskCardProps {
    task: TaskInterface
}

const TaskCard : React.FunctionComponent<TaskCardProps>  = (props) => {
    const classes = useClasses(props.task)

    return props.task ? (
        <Grid key={props.task.id} container spacing={1} className={classes.wrapper}>
            <Grid item>
                <div id={`task-${props.task.id}-bullet`} className={classes.taskBullet}></div>
            </Grid>
            <Grid item>
                {props.task.title}
            </Grid>
        </Grid>
    ) : <></>
}

export default TaskCard;
