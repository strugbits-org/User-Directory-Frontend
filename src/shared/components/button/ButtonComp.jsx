import React from 'react';
import { Button } from '@material-ui/core';

const ButtonComp = ({
    children,
    className,
    type,
    style,
    color,
    variant,
    startIcon,
    endIcon,
}) => (
    <Button
        color={'primary' || color}
        variant={'contained' || variant}
        className={className}
        type={type}
        style={style}
        startIcon={startIcon}
        endIcon={endIcon}
    >
        {children}
    </Button>
);

export default ButtonComp;