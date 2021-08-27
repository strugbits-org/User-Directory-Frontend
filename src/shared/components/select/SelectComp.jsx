import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import useStyles from './SelectCompStyle';

const SelectComp = (
  {
    label, children, minWidth, ...others
  },
) => {
  const classes = useStyles({ minWidth });

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={`outlined-${label}-native-simple`}>{label}</InputLabel>
      <Select
        native
        autoWidth
        fullWidth
        className={classes.select}
        label={label}
        inputProps={{
          name: label,
          id: `outlined-${label}-native-simple`,
        }}
        {...others}
      >
        {children}
      </Select>
    </FormControl>
  );
};

SelectComp.defaultProps = {
  minWidth: '140px',
};

export default SelectComp;