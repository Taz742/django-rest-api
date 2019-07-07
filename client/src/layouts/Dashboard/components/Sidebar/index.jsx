import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography,
    Button,
} from '@material-ui/core';

// Material icons
import {
    DashboardOutlined as DashboardIcon,
    // InfoOutlined as InfoIcon,
} from '@material-ui/icons';

// Component styles
import styles from './styles';

//redux
import { connect } from 'react-redux';
import { UserIsUnauthorized } from '../../../../redux/actions';

const navigations = [{
    en: 'Tours',
    ge: 'ტურები',
    to: '/tours',
    icon: <DashboardIcon />
}, {
    en: 'Hotels',
    ge: 'სასტუმროები',
    to: '/hotels',
    icon: <DashboardIcon />
}, {
    en: 'Cars',
    ge: 'ტრანსპორტი',
    to: '/cars',
    icon: <DashboardIcon />
}];

class Sidebar extends Component {
    render() {
        const {
            classes,
            authenticationReducer,
            settingsReducer
        } = this.props;

        const getProfile = () => {
            const {
                authorized,
                user: {
                    profile
                }
            } = authenticationReducer;

            if (!authorized) {
                return (
                    <>
                        <ListSubheader className={classes.listSubheader}>
                            {{
                                en: 'Profile',
                                ge: 'მომხმარებელი'
                            }[settingsReducer.language]}
                        </ListSubheader>
                        <div className={classes.profile}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => this.props.history.push('/sign-in')}
                                fullWidth
                            >
                                {{
                                    en: 'Sign in',
                                    ge: 'შესვლა'
                                }[settingsReducer.language]}
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => this.props.history.push('/sign-up')}
                                style={{marginTop: 10}}
                                fullWidth
                            >
                            {{
                                en: 'Sign up',
                                ge: 'რეგოსტრაცია'
                            }[settingsReducer.language]}
                            </Button>
                        </div>
                        <Divider className={classes.profileDivider} />
                    </>
                )
            }

            return (
                <>
                    <ListSubheader className={classes.listSubheader}>
                        {{
                            en: 'Profile',
                            ge: 'მონაცემები'
                        }[settingsReducer.language]}
                    </ListSubheader>
                    <div className={classes.profile}>
                        <Link to="/account">
                            <Avatar
                                alt="Roman Kutepov"
                                className={classes.avatar}
                                src="https://ca.slack-edge.com/T88TYEF4L-UAXE19KS9-bb5e12c43b7f-512"
                            />
                        </Link>
                        <Typography
                            className={classes.nameText}
                            variant="h6"
                        >
                            {`${profile.first_name} ${profile.last_name}`}
                        </Typography>
                        <Button variant="outlined" color="primary" onClick={this.props.logout} style={{marginTop: 10}}>Log Out</Button>
                    </div>
                    <Divider className={classes.profileDivider} />
                    <div style={{textAlign: 'center', display: 'flex', flexWrap: 'wrap'}}>
                        <Button
                            onClick={() => this.props.history.push('/hotels/create')}
                            variant="contained"
                            color="primary"
                            style={{width: '100%'}}
                        >
                            {{
                                en: 'My Hotels',
                                ge: 'ჩემი სასტუმროები'
                            }[settingsReducer.language]} 
                        </Button>
                        <Button
                            onClick={() => this.props.history.push('/tours/create')}
                            variant="contained"
                            color="primary"
                            style={{width: '100%', marginTop: 10}}
                        >
                            {{
                                en: 'My Tours',
                                ge: 'ჩემი ტურები'
                            }[settingsReducer.language]} 
                        </Button>
                        <Button
                            onClick={() => this.props.history.push('/cars/my')}
                            variant="contained"
                            color="primary"
                            style={{width: '100%', marginTop: 10}}
                        >
                            {{
                                en: 'My Cars',
                                ge: 'ჩემი ტრანსპორტი'
                            }[settingsReducer.language]} 
                        </Button>
                    </div>
                    <Divider className={classes.profileDivider} />
                </>
            )
        }

        return (
            <nav className={classes.root}>
                <div className={classes.logoWrapper}>
                    <Link
                        className={classes.logoLink}
                        to="/"
                    >
                        <img
                            alt="Brainalytica logo"
                            className={classes.logoImage}
                            src="https://react-material-dashboard.devias.io/images/logos/brainalytica_logo.svg"
                        />
                    </Link>
                </div>
                <Divider className={classes.logoDivider} />
                {getProfile()}
                <List
                    component="div"
                    disablePadding
                    subheader={
                        <ListSubheader className={classes.listSubheader}>
                            {{
                                en: 'Categories',
                                ge: 'კატეგორიები'
                            }[settingsReducer.language]}
                        </ListSubheader>
                    }
                >
                    {navigations.map((navigation, index) => {
                        return (
                            <ListItem
                                activeclassname={classes.activeListItem}
                                className={classes.listItem}
                                component={Link}
                                to={navigation.to}
                                key={index}
                            >
                                <ListItemIcon className={classes.listItemIcon}>
                                    {navigation.icon}
                                </ListItemIcon>
                                <ListItemText
                                    classes={{ primary: classes.listItemText }}
                                    primary={navigation[settingsReducer.language]}
                                />
                            </ListItem>
                        )
                    })}
                </List>
                <Divider className={classes.listDivider} />
            </nav>
        );
    }
};

Sidebar.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        settingsReducer: state.settingsReducer,
        authenticationReducer: state.authenticationReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(UserIsUnauthorized());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter((withStyles(styles)(Sidebar))));
