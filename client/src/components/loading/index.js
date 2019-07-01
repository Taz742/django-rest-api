import React from 'react';

// material ui
import { CircularProgress } from '@material-ui/core';

// material helpers
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    progress: {
        display: 'block',
        marginTop: theme.spacing(2),
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

function Loading(props) {
    const { classes } = props;

    return (
        <CircularProgress className={classes.progress} />
    )
};

export default withStyles(styles)(Loading);