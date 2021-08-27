import React from 'react';
import useStyles from "./AddAndDisplayImageCompStyle";

const AddAndDisplayImageComp = ({
  src,
  onSelectImageHandler,
  imagePreview,
  imageRequired,
}) => {
  const classes = useStyles();
  return (
    <div>
      <>
        <input
          type="file"
          id="img"
          name="image"
          accept="image/*"
          required={imageRequired}
          onChange={onSelectImageHandler}
        />
        {
          imagePreview === undefined ? null :
            <img
              className={classes.imagePreview}
              src={imagePreview || src}
              alt="User"
            />
        }
      </>
    </div>
  )
}

export default AddAndDisplayImageComp;