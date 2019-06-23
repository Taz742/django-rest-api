import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './productCard';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1100 + theme.spacing(3 * 2))]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        overflow: 'hidden',
        marginTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
});

class Products extends React.Component {
    state = {
        searchValue: '',
    };

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value
        }, this.getBooks);
    }

    getBooks = () => {
        const { searchValue } = this.state;

        this.props.getBooks(searchValue);
    }

    redirectToDetail = (id) => {
        this.props.history.push(`/book/${id}`);
    }

    render() {
        const {
            classes
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
                        <Grid item key={product.description} sm={6} md={4} lg={3} xs={12}>
                            <MediaCard product={product} />
                        </Grid>
                    )
                })}
            </Grid>
        )

        return (
            <div className={classes.layout}>
                <Button
                    onClick={() => this.props.history.push('/products/create')}
                    variant="contained"
                    color="primary"
                >
                    Add new product
                </Button>
                <div style={{marginTop: 20}}>{cards()}</div>
            </div>
        );
    }
};

Products.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
