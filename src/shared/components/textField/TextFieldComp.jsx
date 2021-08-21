import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldComp = ({
  className, label, name, onChange, type
}) => {

  return (
    <TextField
      className={className}
      fullWidth={true}
      label={label}
      name={name}
      type={type}
      onChange={onChange}
      required
    />
  );
};

export default TextFieldComp;