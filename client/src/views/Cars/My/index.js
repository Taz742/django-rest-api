import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    Paper,
    Button
} from "@material-ui/core";

// redux
import { connect } from 'react-redux';
import { GetMyCars } from '../../../redux/actions';

// helper components
import { Dashboard as DashboardLayout } from '../../../layouts';
import Loading from '../../../components/loading';

const styles = makeStyles((theme) => ({
    paper: {
        flexGrow: 1,
        border: '1px solid #DFE3E8',
        marginTop: theme.spacing(2),
    },
}));

function MyCars(props) {
    const classes = styles();
    const {
        settingsReducer,
        myCarsReducer
    } = props;

    React.useEffect(() => {
        props.getMyCars();
    }, []); // likes componentDidMount

    return (
        <DashboardLayout
            title={{
                en: 'My Cars',
                ge: 'ჩემი ტრანსპორტი'
            }[settingsReducer.language]}
        >
            <div>
                {myCarsReducer.fetching ?
                    <Loading />
                    :
                    <>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => props.history.push('/cars/create')}
                        >
                            ADD
                        </Button>
                        <Paper className={classes.paper} elevation={0}>
                            <div style={{overflowX: 'auto'}}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">ID</TableCell>
                                            <TableCell align="left">Image</TableCell>
                                            <TableCell align="left">Car name</TableCell>
                                            <TableCell align="left">Car model</TableCell>
                                            <TableCell align="left">Views</TableCell>
                                            <TableCell align="left">Price</TableCell>
                                            <TableCell align="left">Date</TableCell>
                                            <TableCell align="left">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <React.Fragment>
                                            {myCarsReducer.cars.map((eachCar) => {
                                                return (
                                                    <TableRow
                                                        key={eachCar.id}
                                                        style={{cursor: 'pointer'}}
                                                        onClick={(e) => {
                                                        }}
                                                    >
                                                        <TableCell align="left">{1}</TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </React.Fragment>
                                    </TableBody>
                                </Table>
                            </div>
                            <TablePagination
                                rowsPerPageOptions={[10]}
                                component="div"
                                count={20}
                                rowsPerPage={10}
                                page={0}
                                backIconButtonProps={{
                                    'aria-label': 'Previous Page',
                                }}
                                nextIconButtonProps={{
                                    'aria-label': 'Next Page',
                                }}
                                onChangePage={(e, page) => {
                                    // this.props.filterChanged('page', page);
                                }}
                                onChangeRowsPerPage={() => {

                                }}
                            />
                        </Paper>
                    </>
                }
            </div>
        </DashboardLayout>
    )
};

const mapStateToProps = (state) => {
    return {
        settingsReducer: state.settingsReducer,
        myCarsReducer: state.myCarsReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyCars: () => {
            dispatch(GetMyCars());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCars);