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
    Badge
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

const StyledBadge = withStyles((theme) => ({
    badge: {
        top: '50%',
    },
}))(Badge);

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
                profile
            } = authenticationReducer;

            if (!authorized) {
                return null;
            }

            return (
                <>
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
                        
                        <Divider />
                        
                        <div style={{marginTop: 20, textAlign: 'center'}}>
                            <StyledBadge className={classes.margin} badgeContent={99} color="primary">
                                <Button
                                    onClick={() => this.props.history.push('/hotels/create')}
                                    variant="outlined"
                                    color="primary"
                                >
                                    {{
                                        en: 'My Hotels',
                                        ge: 'ჩემი სასტუმროები'
                                    }[settingsReducer.language]} 
                                </Button>
                            </StyledBadge>
                            <StyledBadge className={classes.margin} badgeContent={99} color="primary">
                                <Button
                                    onClick={() => this.props.history.push('/tours/create')}
                                    variant="outlined"
                                    color="primary"
                                >
                                    {{
                                        en: 'My Tours',
                                        ge: 'ჩემი ტურები'
                                    }[settingsReducer.language]} 
                                </Button>
                            </StyledBadge>
                            <StyledBadge className={classes.margin} badgeContent={99} color="primary">
                                <Button
                                    onClick={() => this.props.history.push('/cars/create')}
                                    variant="outlined"
                                    color="primary"
                                >
                                    {{
                                        en: 'My Cars',
                                        ge: 'ჩემი ტრანსპორტი'
                                    }[settingsReducer.language]} 
                                </Button>
                            </StyledBadge>
                        </div>
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

export default connect(mapStateToProps)(withRouter((withStyles(styles)(Sidebar))));
