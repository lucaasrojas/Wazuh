import { makeStyles } from '@mui/styles';

export default makeStyles({
    wrapper: {
        flexFlow: "nowrap",
        overflow: "hidden",
        flexWrap: "none" 
    },
    taskBullet: {
        width: 20, 
        height: "100%", 
        borderRadius: "4px 0px 0px 4px",
        backgroundColor: ({completed}) => completed ? "green" : "gray"
    },
    taskTitle: {
        margin: 0,
        fontSize: "16px"
    }
})