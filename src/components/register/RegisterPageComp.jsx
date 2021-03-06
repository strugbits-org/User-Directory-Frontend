import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
} from '@material-ui/core';
import useStyles from "./RegisterPageCompStyle";
import TextFieldComp from "../../shared/components/textField/TextFieldComp";
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import facebook from "../../assets/facebook.jpg";
import twitter from "../../assets/twitter.jpg";
import google from "../../assets/google.jpg";
import AppleIcon from '@material-ui/icons/Apple';
import dotsImage from "../../assets/leftDots.png";
import blueDotsImage from "../../assets/dotsBlue.png";
import axios from 'axios';
import { ApiConfig } from "../../config/ApiConfig";
import SnackBarComp from "../../shared/components/snackBar/SnackBarComp";
import ButtonComp from "../../shared/components/button/ButtonComp";
import LayoutComp from "../../shared/components/layout/LayoutComp";
import CircularProgress from '@material-ui/core/CircularProgress';

const RegisterPageComp = () => {
  const classes = useStyles();
  const [respMessage, setRespMessage] = useState();
  const [statusType, setStatusType] = useState('error');
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [snackDuration, setSnackDuration] = useState(0);
  const [btnVisibility, setBtnVisibility] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setBtnVisibility(true);
    try {
      const body = JSON.stringify(userDetails);
      await axios.post('/api/auth/register', body, ApiConfig)
        .then((resp) => {
          setStatusType("success");
          setBtnVisibility(false);
          setUserDetails();
          setRespMessage(resp.data.message);
          setSnackDuration(11000);
          document.getElementById("registerForm").reset();
        })
    } catch (err) {
      setRespMessage(err.response.data.message);
      setStatusType("error");
      setSnackDuration(6000);
      setBtnVisibility(false);
    }
    setOpen(true);
  }

  return (
    <div>
      <LayoutComp />
      <Grid container>
        <Grid item xs={2}>
          <div>
            <img className={classes.dotsImage} src={dotsImage} alt="dots" />
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.blueDotsImage} style={{ backgroundImage: `url(${blueDotsImage})` }} >
            <div style={{ margin: '20% 0 0 0', width: '80%' }}>
              <div>
                <Typography className={classes.greatAppTypo}>
                  Great app that makes your business easier
                </Typography>
              </div>
              <div style={{ margin: '10% 0 0 0' }}>
                <Typography className={classes.subHeadTypo}>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                  officia deserunt mollit lorem ipsum anim id est laborum perspiciatis unde.
                </Typography>
              </div>
              <div>
                <ButtonComp
                  className={classes.appleBtn}
                  startIcon={<AppleIcon />}>
                  App Store
                </ButtonComp>
                {/* <span style={{ fontSize: '9px' }}>Download on</span> &nbsp; <br /> */}
                <ButtonComp
                  className={classes.googleBtn}
                  startIcon={<ArrowRightTwoToneIcon />}>
                  Google Play
                </ButtonComp>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <form id="registerForm" onSubmit={onSubmitHandler}>
            <div className={classes.card}>
              <Card>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <div className={classes.cardHeader}></div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.cardHeaderTypo}>
                      Register your account
                    </Typography>
                  </Grid>
                  <Grid item xs={11}>
                    <TextFieldComp
                      className={classes.textField}
                      label="User Name"
                      name="userName"
                      onChange={onChangeHandler} />
                  </Grid>
                  <Grid item xs={11}>
                    <TextFieldComp
                      className={classes.textField}
                      label="Email"
                      name="email"
                      type="email"
                      onChange={onChangeHandler} />
                  </Grid>
                  <Grid item xs={11}>
                    <TextFieldComp
                      className={classes.textField}
                      label="Password"
                      name="password"
                      type="password"
                      onChange={onChangeHandler} />
                  </Grid>
                  <Grid item xs={12}>
                    {
                      btnVisibility ?
                        <CircularProgress style={{ margin: "4% 0 2% 45%" }} />
                        : <ButtonComp
                          className={classes.registerBtn}
                          endIcon={<ArrowRightTwoToneIcon />}
                          type="submit">
                          Register
                        </ButtonComp>
                    }
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.socialTypo}>
                      Register with social Media
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.socialCont}>
                      <div className={classes.socialIcons}>
                        <img src={facebook} style={{ height: '43px' }} alt="facebook" />
                      </div>
                      <div className={classes.socialIcons}>
                        <img src={twitter} style={{ height: '43px' }} alt="twitter" />
                      </div>
                      <div className={classes.socialIcons}>
                        <img src={google} style={{ height: '43px' }} alt="google" />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.cardFooter}>
                      <div style={{ flex: '0.5' }}>
                        <Typography className={classes.cardFooterTypo}>
                          Already have a account?
                        </Typography>
                      </div>
                      <div style={{ flex: '0.5' }}>
                        <Typography className={classes.cardFooterTypo2}>
                          <a style={{ color: 'white' }} href="/login"> Sign in! </a>
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </div>
          </form>
        </Grid>
        <Grid item xs={2}>

        </Grid>
      </Grid>
      <SnackBarComp
        open={open}
        setOpen={setOpen}
        statusType={statusType}
        respMessage={respMessage}
        snackDuration={snackDuration}
      />
    </div>
  )
}

export default RegisterPageComp;