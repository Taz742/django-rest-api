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

const styles = makeStyles((theme) => ({
    paper: {
        flexGrow: 1,
        border: '1px solid #DFE3E8',
        marginTop: theme.spacing(2),
    },
}));

export function CarsTable(props) {
    const classes = styles();

    const { cars } = props;

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => props.history.push('/cars/my/create')}
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
                                {cars.map((eachCar) => {
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
        </React.Fragment>
    )
};
