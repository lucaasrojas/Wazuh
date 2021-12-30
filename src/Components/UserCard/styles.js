import { makeStyles } from '@mui/styles';

export default makeStyles({
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
    },
    label: {
        overflowWrap: "anywhere"
    }
})