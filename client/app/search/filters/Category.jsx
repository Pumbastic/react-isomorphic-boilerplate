import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../../root/actions/filter-actions';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  menu: {
    width: 200,
  },
});

const Category = props => {
  const { category, classes, handleSelectCategory } = props
  const { labelDropdown, path, categories, select } = category;

  return (
    <Fragment>
      {!!categories.length &&
        <TextField
          fullWidth
          cols={2}
          key={'id__0' + path.join('')}
          select
          className={classNames(classes.margin, classes.textField)}
          //variant="outlined"
          label={labelDropdown}
          value={select}
          onChange={handleSelectCategory(category)}
        >
          {categories.map(category =>
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          )}
        </TextField>
      }
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  handleSelectCategory: category => event => {
    dispatch(selectCategory(category, event.target.value));
  }
});

export default withStyles(styles, { withTheme: true })(connect(
  () => {return {}},
  mapDispatchToProps,
)(Category));