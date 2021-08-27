import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './ButtonCompStyle';

const ButtonComp = ({
    children,
    className,
    type,
    style,
    color,
    variant,
    startIcon,
    endIcon,
    onClick,
}) => {
    const classes = useStyles();
    return (
        <Button
            color={color || 'primary'}
            variant={'contained' || variant}
            className={`${className} ${classes.btn}`}
            type={type}
            style={style}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
export default ButtonComp;