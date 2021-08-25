import React from 'react';
import useStyles from "./ImageCardCompStyle";
import {
  Typography,
} from '@material-ui/core';

const ImageCardComp = ({ head1, head2, imgSrc }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ position: 'relative' }}>
        <img width="220px" src={imgSrc} alt="card1" />
        <div className={classes.mainDiv}>
          <Typography className={classes.head1Typo} >
            {head1}
          </Typography>
          <Typography className={classes.head2Typo}>
            {head2}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ImageCardComp
