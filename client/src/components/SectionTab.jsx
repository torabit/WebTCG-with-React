import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: '50px',
    },
});

const SectionTab = (props) => {
    const classes = useStyles();
    
    return (
        <Paper square className={classes.root}>
            <Tabs
                value={props.value}
                onChange={props.handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab  label={props.name.home} />
                <Tab  label={props.name.deck} />
                <Tab  label={props.name.battle} />
            </Tabs>
        </Paper>
    );
}

export default SectionTab;