
import React from 'react';
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import TaskInterface from 'Assets/Interfaces/TaskInterface'
const useStyles = makeStyles({
    wrapper: {
        flexFlow: "nowrap", overflow: "hidden" 
    },
    taskBullet: {
        width: 20, 
        height: "100%", 
        borderRadius: "4px 0px 0px 4px", 
        backgroundColor: (task : TaskInterface) => task.completed ? "green" : "gray"
    }
})

interface TaskCardProps {
    task: TaskInterface
}

const TaskCard : React.FunctionComponent<TaskCardProps>  = (props) => {
    const classes = useStyles(props.task)

    return props.task ? (
        <Grid key={props.task.id} container spacing={1} className={classes.wrapper}>
            <Grid item>
                <div className={classes.taskBullet}></div>
            </Grid>
            <Grid item>
                {props.task.title}
            </Grid>
        </Grid>
    ) : <></>
}

export default TaskCard;
