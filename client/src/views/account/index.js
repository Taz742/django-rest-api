import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    layout: {
        
    },
    bigAvatar: {
        margin: 20,
        width: 120,
        height: 120,
    },
});

class Account extends React.Component {
    state = {
        image: null,
    }

    componentdDidMount() {
        console.log('ff: ');
    }

    save = () => {

    }

    onUpload = (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        formData.append('title', 'title');
        formData.append('price', 11.22);

        axios.post('/api/products/', formData, {
            headers: {'Content-Type': 'multipart/form-data' }
        }).then(res => {
            console.log(res);
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.layout}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper elevation={0} style={{border: '1px solid #DFE3E8'}}>
                            <div style={{display: 'flex'}}>
                                <div style={{float: 'left', flexGrow: 1}}>
                                    <Typography variant="h3" gutterBottom style={{paddingLeft: 20, paddingTop: 20}}>
                                        Tazo Leladze
                                    </Typography>
                                    <Typography variant="body1" style={{paddingLeft: 20}}>
                                        {`From Georgia. Kutaisi`}
                                    </Typography>
                                </div>
                                <div style={{float: 'right'}}>
                                    <Avatar alt="Remy Sharp" src="https://ca.slack-edge.com/T88TYEF4L-UAXE19KS9-bb5e12c43b7f-512" className={classes.bigAvatar} />
                                </div>
                            </div>

                            <Divider style={{ marginTop: 10}} />
                            <div style={{padding: 10}}>
                                <Button
                                    onClick={() => this.props.history.push('/products/create')}
                                    color="primary"
                                >
                                    Upload avatar
                                </Button>
                                <Button
                                    onClick={() => this.props.history.push('/products/create')}
                                >
                                    Remove avatar
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                        <Paper elevation={0} style={{border: '1px solid #DFE3E8', padding: 20}}>
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                            right paper
                        </Paper>
                    </Grid>
                </Grid>
                {/* <input type="file" onChange={this.onUpload} /> */}
            </div>
        )
    }
};

export default withStyles(styles)(Account);