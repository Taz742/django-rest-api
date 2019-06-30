import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './card';
import Button from '@material-ui/core/Button';
import { Dashboard as DashboardLayout } from '../../layouts';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    layout: {
        width: 'auto',
        padding: 25,
        [theme.breakpoints.up(1100 + theme.spacing(3 * 2))]: {
            // marginLeft: 'auto',
            // marginRight: 'auto',
        },
        overflow: 'hidden',
        paddingBottom: theme.spacing(3)
    },
});

class Cars extends React.Component {
    state = {
        searchValue: '',
    };

    render() {
        const {
            classes,
            settingsReducer
        } = this.props;

        const cards = () => (
            <Grid container spacing={3}>
                {[{
                    description: 'a',
                }, {
                    description: 'b',
                }, {
                    description: 'fafdsfdsjfidshofiudshufhdsfiuhsdfunhdsufndsfkdsnfkdsdf',
                }, {
                    description: 'c',
                }, {
                    description: 'fafdsfdsjfidshofiudshufhdsfiuhsdfunhdsufndsfkdsnfkdsdf1313',
                }, {
                    description: 'faf',
                }, {
                    description: 'fafdsfdsjfidshofiudshufhdsfiuhsdfunhdsufnd',
                }, {
                    description: '13213',
                }, ].map((product) => {
                    return (
                        <Grid item key={product.description} sm={6} md={3} lg={3} xs={12}>
                            <MediaCard product={product} />
                        </Grid>
                    )
                })}
            </Grid>
        )

        return (
            <DashboardLayout
                title={{
                    en: 'Cars',
                    ge: 'ტრანსპორტი'
                }[settingsReducer.language]}
            >
                <div className={classes.layout}>
                    <Button
                        onClick={() => this.props.history.push('/cars/create')}
                        variant="contained"
                        color="primary"
                    >
                        Add
                    </Button>
                    <div style={{marginTop: 20}}>{cards()}</div>
                </div>
            </DashboardLayout>
        );
    }
}

Cars.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        settingsReducer: state.settingsReducer,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Cars));