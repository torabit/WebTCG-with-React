import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(15),
        height: theme.spacing(20),
      },
    },
}));
  
const PlacementOfCards = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={3}>
				<Box p={3}>{props.value}</Box>
			</Paper>
		</div>
	);
}

export default PlacementOfCards;
  