import React from 'react';
import useStyles from "./LayoutCompStyle";
import bgImage from "../../../assets/background.png";
import ftrImage from "../../../assets/footerBubbles.png";

const LayoutComp = () => {

  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.bgImage}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className={classes.bubbleImage}
          style={{ backgroundImage: `url(${ftrImage})` }}
        />
      </div>
    </div>
  )
}

export default LayoutComp
