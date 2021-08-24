import React from 'react';
import useStyles from "./BlueCircleCompStyle";
import {
  Typography,
} from '@material-ui/core';

const BlueCircleComp = ({ head1, head2, head3 }) => {

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.blueCircle} />
        <div style={{ width: '100%' }}>
          <Typography style={{ fontSize: '14px', color: '#7E8085', marginLeft: '2%' }}> {head1}</Typography>
          <Typography style={{ fontSize: '22px', color: '#474E55', marginLeft: '2%' }}> {head2} </Typography>
          <Typography style={{ fontSize: '11px', color: '#7E8085', marginLeft: '2%' }}> {head3} </Typography>
        </div>
      </div>
    </div>
  )
}

export default BlueCircleComp
