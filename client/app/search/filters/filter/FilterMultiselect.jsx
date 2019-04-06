import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { updateInput, selectMultiselect } from '../../../../root/actions/filter-actions';

import {
  MenuItem,
  Select,
  Chip,
  FormControl,
  InputLabel
} from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  marginTop: {
    margin: `${theme.spacing.unit}px 0 0 0`,
  },
  marginBottom: {
    margin: `0 0 ${theme.spacing.unit}px 0`,
  },
  marginTopBottom: {
    margin: `${theme.spacing.unit}px 0 ${theme.spacing.unit}px 0`,
  },
});

const FilterMultiselect = props => {
  const { filter, filterValues, upload, classes, handleUpdateInput, location, history } = props
  const { label, field, type, items, value } = filter;

  return (
    <Fragment>
      <div className={classes.root}>
        <FormControl
          fullWidth className={classes.marginTopBottom} >
          <InputLabel
            htmlFor="select-multiple-chip">{label}</InputLabel>
          <Select
            multiple
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            fullWidth
            //variant="outlined"
            label={label}
            value={filterValues[field] || []}
            onChange={handleUpdateInput(field, location, history)}
          >
            {items.map(item =>
              <MenuItem key={item.value} value={item.label}>
                {item.label}
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  filterValues: state.filterReducer.filterValues,
})

const mapDispatchToProps = dispatch => ({
  handleUpdateInput: (field, location, history) => event => {
    dispatch(updateInput(field, event.target.value, location, history));
  },
});

export default withRouter(withStyles(styles, { withTheme: true })(connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterMultiselect)));