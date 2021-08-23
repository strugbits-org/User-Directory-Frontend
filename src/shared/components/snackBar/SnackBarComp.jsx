import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

const SnackBarComp = ({
  open,
  setOpen,
  statusType,
  respMessage,
  snackDuration
}) => {

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={snackDuration}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        style={{ top: '70px' }}
      >
        <Alert onClose={handleClose} severity={statusType}>
          {respMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBarComp