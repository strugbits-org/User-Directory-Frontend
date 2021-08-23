import { Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiConfig } from "../../config/ApiConfig";
import ButtonComp from "../../shared/components/button/ButtonComp";
import useStyles from "./VerifyEmailPageCompStyle";
import ArrowRightTwoToneIcon from "@material-ui/icons/ArrowRightTwoTone";
import { useHistory } from "react-router-dom";

const VerifyEmailPageComp = () => {
  const [respMessage, setRespMessage] = useState();
  const [user, setUser] = useState();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const url = `${window.location.href}`.split("=");
    const verifyEmail = async () => {
      const body = JSON.stringify({ token: url[1] });
      await axios
        .post("/api/user/verify-email", body, ApiConfig)
        .then((resp) => {
          setUser(resp.data.id);
          setRespMessage(resp.data.message);
        });
    };
    verifyEmail();
  }, []);

  return (
    <div>
      <Typography className={classes.headerMsg}>{respMessage}</Typography>
      {user && (
        <ButtonComp
          className={classes.loginBtn}
          endIcon={<ArrowRightTwoToneIcon />}
          onClick={() => history.push("/login")}
        >
          LOG IN
        </ButtonComp>
      )}
    </div>
  );
};

export default VerifyEmailPageComp;
