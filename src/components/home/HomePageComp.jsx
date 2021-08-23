import {
  Grid,
  Typography,
  Link
} from '@material-ui/core';
import React from 'react';
import logo from "../../assets/logo.png";
import bgImage from "../../assets/pattern.png";
import workImage from "../../assets/workImage.png";
import triangle from "../../assets/traingle.png";
import chatImage from "../../assets/thumbnail.png";
import ButtonComp from '../../shared/components/button/ButtonComp';
import useStyles from "./HomePageCompStyle";
import { useHistory } from "react-router-dom";

const HomePageComp = () => {

  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.bgImage} style={{ backgroundImage: `url(${bgImage})` }}>
      <div style={{ margin: '2% 8% 0 20%' }}>
        <Grid container>
          <Grid item xs={8}>
            <div className={classes.logo} style={{ backgroundImage: `url(${logo})` }}></div>
          </Grid>
          <Grid item xs={4}>
            <ButtonComp
              className={classes.loginRegisterBtn}
              onClick={() => history.push("/login")}>
              Login / Register
            </ButtonComp>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: '10%' }}>
          <Grid item xs={6}>
            <div style={{ width: '80%' }}>
              <div>
                <Typography className={classes.mainHeadTypo}>
                  We are here to help startups reach their dreams
                </Typography>
              </div>
              <div style={{ marginTop: '10%' }}>
                <Typography className={classes.subHeadTypo}>
                  Build a startup is not easy so we want to help you to reach your dream.
                  You can focus to build the emperor from the inside while we will speak it louder to the worlds
                </Typography>
              </div>
            </div>
            <Grid container>
              <Grid item xs={6}>
                <ButtonComp
                  className={classes.loginRegisterBtn}>
                  low it work:
                </ButtonComp>
                <br />
                <Typography className={classes.alreadyUsing}>
                  Already using Planeta? <a href="/"> Sign in </a>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <div style={{ marginTop: '2%' }}>
                  <Link href="/" className={classes.link}> Forgot Password? </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.workImage} style={{ backgroundImage: `url(${workImage})` }}></div>
          </Grid>
          <Grid item xs={12}>
            <Grid container style={{ margin: '10% 0 0 5%' }}>
              <Grid item xs={1}>
                <div className={classes.triangleImage} style={{ backgroundImage: `url(${triangle})` }}></div>
              </Grid>
              <Grid item xs={11}>
                <Typography className={classes.whyFastTypo}>
                  Why the fastest-growing companies choose Planeta
                </Typography>
                <div style={{ width: '50%', margin: '2% 0 0 0', textAlign: 'center' }}>
                  <Typography className={classes.whyFastSubTypo}>
                    Our customer service and engagement products are powerful and flexible, and scale to meet the needs of any business.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.chatImage} style={{ backgroundImage: `url(${chatImage})` }}></div>
          </Grid>
          <Grid>

          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePageComp
