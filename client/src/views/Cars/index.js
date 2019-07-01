import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// material components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// redux
import { connect } from 'react-redux';
import { GetCars } from '../../redux/actions';

// helper components
import { Dashboard as DashboardLayout } from '../../layouts';
import MediaCard from './card';
import Loading from '../../components/loading';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    layout: {
        width: 'auto',
        padding: 5,
        paddingBottom: theme.spacing(3)
    },
});

function Cars(props) {
    const {
        classes,
        settingsReducer,
        carsReducer
    } = props;

    React.useEffect(() => {
        props.getCars();
    }, []);

    return (
        <DashboardLayout
            title={{
                en: 'Cars',
                ge: 'ტრანსპორტი'
            }[settingsReducer.language]}
        >
            <div>
                <Button
                    onClick={() => props.history.push('/cars/create')}
                    variant="contained"
                    color="primary"
                >
                    Add
                </Button>
                <div style={{marginTop: 20}}>
                    {carsReducer.fetching ?
                        <Loading />
                        :
                        <Grid container spacing={3}>
                            {carsReducer.cars.map((car) => {
                                return (
                                    <Grid item key={car.id} sm={6} md={3} lg={3} xs={12}>
                                        <MediaCard car={car} language={settingsReducer.language} />
                                    </Grid>
                                )
                            })}
                        </Grid>   
                    }
                </div>
            </div>
        </DashboardLayout>
    )
}

Cars.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        settingsReducer: state.settingsReducer,
        carsReducer: state.carsReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCars: () => {
            dispatch(GetCars());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Cars)));