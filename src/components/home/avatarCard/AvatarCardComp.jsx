import React from 'react';
import {
  Typography
} from '@material-ui/core';
import useStyles from "./AvatarCardCompStyle";

const AvatarCardComp = ({ content, author, imageSrc }) => {

  const classes = useStyles();

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div className={classes.mainDiv}>
          <Typography className={classes.content}> {content} </Typography>
          <br />
          <Typography className={classes.author}> {author} </Typography>
        </div>
        <div className={classes.imageDiv}>
          <img src={imageSrc} alt='loading' />
        </div>
      </div>
    </div>
  )
}

export default AvatarCardComp
