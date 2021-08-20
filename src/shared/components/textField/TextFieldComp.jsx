import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldComp = ({
  className, label,
}) => {

  return (
    <TextField
      className={className}
      fullWidth={true}
      label={label}
      required
    />
  );
};

export default TextFieldComp;