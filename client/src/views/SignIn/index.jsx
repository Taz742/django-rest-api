import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
    Grid,
    Button,
    IconButton,
    CircularProgress,
    TextField,
    Typography
} from '@material-ui/core';

// Material icons
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

// Shared components
// import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

// Component styles
import styles from './styles';

//redux
import { connect } from 'react-redux';
import { LogIn } from '../../redux/actions';

class SignIn extends Component {
    state = {
        values: {
            email: '',
            password: ''
        },
    };

    componentDidMount() {
        this.checkAuthentication();
    }

    handleBack = () => {
        const { history } = this.props;

        history.goBack();
    };

    handleFieldChange = (key, value) => {
        this.setState({
            values: {
                ...this.state.values,
                [key]: value,
            }
        })
    };

    handleSignIn = () => {
        const { email, password } = this.state.values;

        this.props.logIn(email, password);
    };

    checkAuthentication = () => {
        const { authenticationReducer } = this.props;

        if (authenticationReducer.authorized) {
            this.props.history.push("/");
        }
    };

    componentDidUpdate() {
        this.checkAuthentication();
    }

    render() {
        const { classes } = this.props;
        const {
            values,
        } = this.state;

        const {
            authenticationReducer: {
                fetching
            }
        } = this.props;

        return (
            <div className={classes.root}>
                <Grid
                    className={classes.grid}
                    container
                >
                    <Grid
                        className={classes.quoteWrapper}
                        item
                        lg={5}
                    >
                        <div className={classes.quote}>
                            <div className={classes.quoteInner}>
                                <Typography
                                    className={classes.quoteText}
                                    variant="h1"
                                >
                                    Welcome!
                                </Typography>
                                <div className={classes.person}>

                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        className={classes.content}
                        item
                        lg={7}
                        xs={12}
                    >
                        <div className={classes.content}>
                            <div className={classes.contentHeader}>
                                <IconButton
                                    className={classes.backButton}
                                    onClick={this.handleBack}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                            </div>
                            <div className={classes.contentBody}>
                                <form className={classes.form}>
                                    <Typography
                                        className={classes.title}
                                        variant="h2"
                                    >
                                        Sign in
                                    </Typography>
                                    <div className={classes.fields}>
                                        <TextField
                                            className={classes.textField}
                                            label="Email address"
                                            name="email"
                                            onChange={event =>
                                                this.handleFieldChange('email', event.target.value)
                                            }
                                            type="text"
                                            value={values.email}
                                            variant="outlined"
                                        />
                                        <TextField
                                            className={classes.textField}
                                            label="Password"
                                            name="password"
                                            onChange={event =>
                                                this.handleFieldChange('password', event.target.value)
                                            }
                                            type="password"
                                            value={values.password}
                                            variant="outlined"
                                        />
                                    </div>
                                    {fetching ?
                                        <CircularProgress className={classes.progress} />
                                        :
                                        <Button
                                            className={classes.signInButton}
                                            color="primary"
                                            onClick={this.handleSignIn}
                                            size="large"
                                            variant="contained"
                                        >
                                            Sign in now
                                        </Button>
                                    }
                                    <Typography
                                        className={classes.signUp}
                                        variant="body1"
                                    >
                                        Don't have an account?{' '}
                                        <Link
                                            className={classes.signUpUrl}
                                            to="/sign-up"
                                        >
                                            Sign up
                                        </Link>
                                    </Typography>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

SignIn.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        authenticationReducer: state.authenticationReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email, password) => {
            dispatch(LogIn(email, password));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(compose(withRouter,withStyles(styles))(SignIn));