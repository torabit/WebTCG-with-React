import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',    
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const EnergyIcon = (props) => {
    const classes = useStyles();

    return (
        <Avatar className={classes.root} alt="Remy Sharp" src={props.icon}/>
    );
}

export default EnergyIcon;