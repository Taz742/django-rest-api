import React from 'react';

// material ui
import { withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Avatar,
    Button,
    Typography,
    Divider
} from '@material-ui/core';

const styles = {
    bigAvatar: {
        margin: 20,
        width: 120,
        height: 120,
    },
};

function Profile({profile, classes, ...props}) {
    return (
        <Paper elevation={0} style={{border: '1px solid #DFE3E8'}}>
            <div style={{display: 'flex'}}>
                <div style={{float: 'left', flexGrow: 1}}>
                    <Typography variant="h3" gutterBottom style={{paddingLeft: 20, paddingTop: 20}}>
                        {`${profile.first_name} ${profile.last_name}`}
                    </Typography>
                    <Typography variant="body1" style={{paddingLeft: 20}}>
                        {`Other details`}
                    </Typography>
                </div>
                <div style={{float: 'right'}}>
                    <Avatar alt="Remy Sharp" src="https://ca.slack-edge.com/T88TYEF4L-UAXE19KS9-bb5e12c43b7f-512" className={classes.bigAvatar} />
                </div>
            </div>

            <Divider style={{ marginTop: 10}} />
            <div style={{padding: 10}}>
                <Button
                    onClick={() => props.history.push('/products/create')}
                    color="primary"
                >
                    Upload avatar
                </Button>
                <Button
                    onClick={() => props.history.push('/products/create')}
                >
                    Remove avatar
                </Button>
            </div>
        </Paper>
    )
};

export default withStyles(styles)(Profile);