import React from 'react';
import {Button, makeStyles, createStyles,} from '@material-ui/core';

const useStyles = makeStyles( () => (
    createStyles ({
        'acceptButton': {
            background: 'linear-gradient(45deg, #ee7701 30%, #ffdf00 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '20px 48px',
            margin: '40px 0px',
        }
    })
));

const AcceptButton = (props) => {
    const classes = useStyles();
    return (
        <Button 
            className={classes.acceptButton} 
            variant='outlined' 
            color='primary' 
            onClick={props.isCorrect}
        >
            {props.name}
        </Button>
    );
}

export default AcceptButton;