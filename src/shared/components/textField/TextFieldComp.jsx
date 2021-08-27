import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldComp = ({
  className,
  label,
  name,
  onChange,
  type,
  inputProps,
  InputProps,
  fullWidth,
  style,
  variant,
  placeholder,
  defaultValue,
  size,
  required,
}) => {

  return (
    <TextField
      variant={variant}
      className={className}
      fullWidth={true || fullWidth}
      label={label}
      name={name}
      type={type}
      onChange={onChange}
      required={required}
      InputProps={InputProps}
      inputProps={inputProps}
      style={style}
      placeholder={placeholder}
      defaultValue={defaultValue}
      size={size}
    />
  );
};

export default TextFieldComp;