import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  IconButton,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  // Input as InputIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';

//redux
import { connect } from 'react-redux';
import { SettingsChanged } from '../../../../redux/actions';

class Topbar extends Component {
  signal = true;

  state = {
    notifications: [],
    notificationsLimit: 4,
    notificationsCount: 0,
    notificationsEl: null,
    openLanguageSelect: false,
  };

  async getNotifications() {
    // try {
    //   const { notificationsLimit } = this.state;

    //   const { notifications, notificationsCount } = await getNotifications(
    //     notificationsLimit
    //   );

    //   if (this.signal) {
    //     this.setState({
    //       notifications,
    //       notificationsCount
    //     });
    //   }
    // } catch (error) {
    //   return;
    // }
  }

  componentDidMount() {
    this.signal = true;
    this.getNotifications();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSignOut = () => {
    const { history } = this.props;

    history.push('/sign-in');
  };

  handleShowNotifications = event => {
    this.setState({
      notificationsEl: event.currentTarget
    });
  };

  handleCloseNotifications = () => {
    this.setState({
      notificationsEl: null
    });
  };

  handleSelectLanguageOpen = () => {
    this.setState({
      openLanguageSelect: true,
    });
  }

  handleSelectLanguageClose = () => {
    this.setState({
      openLanguageSelect: false,
    });
  }

  render() {
    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar,
    } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              onClick={onToggleSidebar}
              variant="text"
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography
              className={classes.title}
              variant="h4"
            >
              {title}
            </Typography>
            <IconButton
              className={classes.notificationsButton}
            >
              <Select
                open={this.state.openLanguageSelect}
                onClose={this.handleSelectLanguageClose}
                onOpen={this.handleSelectLanguageOpen}
                value={this.props.settingsReducer.language}
                onChange={(e) => {
                  this.props.settingsChanged('language', e.target.value);
                }}
              >
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="ge">GE</MenuItem>
              </Select>
            </IconButton>
          </Toolbar>
        </div>
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

const mapStateToProps = (state) => {
  return {
    settingsReducer: state.settingsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    settingsChanged: (key, value) => {
      dispatch(SettingsChanged(key, value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(compose(withRouter, withStyles(styles))(Topbar));
