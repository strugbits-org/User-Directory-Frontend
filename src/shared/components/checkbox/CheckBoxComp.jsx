import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';

const CheckBoxComp = ({
  onChangeHandler, label, defaultChecked, edge, className,
}) => {
  return (
    <div>
      <FormControlLabel
        className={className}
        control={
          <Checkbox
            name={label}
            color="primary"
            defaultChecked={defaultChecked}
            onChange={onChangeHandler}
            edge={edge}
          />
        }
        label={label}
      />
    </div>
  )
}

export default CheckBoxComp