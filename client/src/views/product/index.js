import React, { Component } from 'react';

// Externals
// import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography, Divider } from '@material-ui/core';

// Material icons
import {
  AccessTime as AccessTimeIcon,
  GetApp as GetAppIcon
} from '@material-ui/icons';

// Shared components
import Paper from '@material-ui/core/Paper';

// Component styles
const styles = theme => ({
  root: {
    maxWidth: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
  },
  imageWrapper: {
    height: '128px',
    width: '128px',
    margin: '0 auto',
    border: '1px solid #EDF0F2',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {},
  title: {
    fontSize: '18px',
    lineHeight: '21px',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2
  },
  description: {
    lineHeight: '16px',
    height: theme.spacing.unit * 4,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit
  },
  updateIcon: {
    color: theme.palette.text.secondary
  },
  updateText: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  downloadsIcon: {
    marginLeft: 'auto',
    color: theme.palette.text.secondary
  },
  downloadsText: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.text.secondary
  }
});

class ProductCard extends Component {
  render() {
    const { classes, product } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.imageWrapper}>
          <img
            alt="Product"
            className={classes.image}
            src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
        <div className={classes.details}>
          <Typography
            className={classes.title}
            variant="h4"
          >
            {product.title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body1"
          >
            {product.description}
          </Typography>
        </div>
        <Divider />
        <div className={classes.stats}>
          <AccessTimeIcon className={classes.updateIcon} />
          <Typography
            className={classes.updateText}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
          <GetAppIcon className={classes.downloadsIcon} />
          <Typography
            className={classes.downloadsText}
            variant="body2"
          >
            Downloads
          </Typography>
        </div>
      </Paper>
    );
  }
}

// ProductCard.propTypes = {
//   className: PropTypes.string,
//   classes: PropTypes.object.isRequired,
//   product: PropTypes.object.isRequired
// };

export default withStyles(styles)(ProductCard);