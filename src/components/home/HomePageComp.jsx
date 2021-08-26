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
import email from "../../assets/email.png";
import user from "../../assets/user.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import less from "../../assets/less.png";
import spotify from "../../assets/spotify.png";
import envato from "../../assets/envato.png";
import codekit from "../../assets/codekit.png";
import jQuery from "../../assets/jQuery.png";
import github from "../../assets/github.png";
import tpComment1 from "../../assets/tpComment1.png";
import tpComment2 from "../../assets/tpComment2.png";
import footerBackground from "../../assets/footerBackground.png";
import talkingPeople from "../../assets/talkingPeople.png";
import ButtonComp from '../../shared/components/button/ButtonComp';
import { useHistory } from "react-router-dom";
import BlueCircleComp from './blueCircle/BlueCircleComp';
import TextFieldComp from "../../shared/components/textField/TextFieldComp";
import { InputAdornment, IconButton } from "@material-ui/core";
import AvatarCardComp from './avatarCard/AvatarCardComp';
import ImageCardComp from './imageCard/ImageCardComp';
import useStyles from "./HomePageCompStyle";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./HomePage.css";

const HomePageComp = () => {

  const classes = useStyles();
  const history = useHistory();

  AOS.init({
    once: true
  });

  return (
    <div className={classes.bgImage} style={{ backgroundImage: `url(${bgImage})` }}>
      <div style={{ margin: '2% 8% 0 20%' }}>
        <Grid container>
          <Grid item xs={8}>
            <div className={classes.logo} style={{ backgroundImage: `url(${logo})` }}></div>
          </Grid>
          <Grid item xs={4}>
            <ButtonComp
              className={classes.roundBtn}
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
                  className={classes.roundBtn}
                  onClick={() => history.push('user/61277d4bce7d06334452fe9a')}
                  >
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
            <div class="animate__animated animate__bounceInRight animate__delay-2s">
              <div className={classes.workImage} style={{ backgroundImage: `url(${workImage})` }}></div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container style={{ margin: '10% 0 0 5%' }}>
              <Grid item xs={1}>
                <div data-aos="triangle">
                  <div className={classes.triangleImage} style={{ backgroundImage: `url(${triangle})` }}></div>
                </div>
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
          <Grid item xs={6} style={{ marginTop: '6%' }}>
            <BlueCircleComp
              head1="SUPPORT"
              head2="Planeta for Support" />
            <BlueCircleComp
              head1="SALES"
              head2="Jupiter for Sales"
              head3={["Make the most impactful customer connections at the right moment through real-time insights into customer behavior",
                <br />, <a style={{ textDecoration: 'none' }} href="/"> Learn more </a>]} />
            <BlueCircleComp
              head1="MARKETING"
              head2="Jupiter for Marketing" />
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: '#F6F7F9', height: '7%', marginTop: '11%' }}>
        <div style={{ textAlign: 'center' }}>
          <Typography style={{ color: '#474E55', fontWeight: 'bold', fontSize: '20px', paddingTop: '4%' }}> Start your free trial </Typography>
          <Typography style={{ color: '#B9BDC6', fontSize: '17px', paddingTop: '1%' }}> Early stage company? Eligible applicants get all of our products for just $49 a month </Typography>
          <TextFieldComp
            className={classes.textField}
            variant="outlined"
            placeholder="Your business email here"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <img src={email} alt="email" />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ButtonComp className={classes.roundBtn}> art Tri </ButtonComp>
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>
      <div style={{ margin: '2% 8% 0 20%' }}>
        <Grid container>
          <Grid container style={{ marginTop: '10%' }}>
            <Grid item xs={5} style={{ marginTop: '13%' }}>
              <div style={{ width: '80%' }}>
                <div>
                  <Typography className={classes.mainHeadTypo}>
                    We plan for better future
                  </Typography>
                </div>
                <div style={{ marginTop: '10%' }}>
                  <Typography className={classes.subHeadTypo}>
                    Someone said that if you fail to plan it means you plan to fail. In here Planeta,
                    we won’t make the things go wrong. So we spend our time to plan our client product
                    better than the other company.
                  </Typography>
                </div>
                <div style={{ marginTop: '10%' }}>
                  <a href="/"> See how we do our work  </a>
                </div>
              </div>
            </Grid>
            <Grid item xs={7}>
              <div style={{ position: 'relative', marginTop: '10%' }}>
                <img width="550px" src={talkingPeople} alt="talkingPeople" />
                <div data-aos="fade-left" data-aos-delay="600" style={{ position: 'absolute', bottom: '323px', left: '113px' }}>
                  <img width="130px" src={tpComment1} alt="tpComment1" />
                </div>
                <div data-aos="fade-left" data-aos-delay="300" style={{ position: 'absolute', bottom: '400px', left: '396px' }}>
                  <img width="70px" src={tpComment2} alt="tpComment2" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: '13%' }}>
        <Typography style={{ fontWeight: 'bold', textAlign: 'center', color: '#2C2E30', fontSize: '25px' }}>
          Kind words from happy partners
        </Typography>
        <Typography style={{ textAlign: 'center', color: '#7E8085', fontSize: '17', marginTop: '1%' }}>
          We got our clients around the world who have already made Planeta the place where their dreams become reality.
        </Typography>
      </div>
      <div style={{ margin: '5% 8% 0 20%' }}>
        <Grid container style={{ marginLeft: '8%' }}>
          <Grid item xs={3}>
            <AvatarCardComp
              content="Without Jupiter, we would have gone bankrupt by now.
              It fits our needs perfectly. Keep up the excellent work."
              author="Aaron Budiman"
              imageSrc={user} />
          </Grid>
          <Grid item xs={3}>
            <AvatarCardComp
              content="Without Jupiter, we would have gone bankrupt by now.
              It fits our needs perfectly. Keep up the excellent work."
              author="Loney Greg"
              imageSrc={user2} />
          </Grid>
          <Grid item xs={3}>
            <AvatarCardComp
              content="Without Jupiter, we would have gone bankrupt by now.
              It fits our needs perfectly. Keep up the excellent work."
              author="Dashto Murdimo"
              imageSrc={user3} />
          </Grid>
        </Grid>
        <div style={{ cursor: 'pointer', display: 'flex', margin: '4% 0 0 4%' }}>
          <img src={less} alt="less" />
          <img src={spotify} alt="spotify" />
          <img src={envato} alt="envato" />
          <img src={codekit} alt="codekit" />
          <img src={jQuery} alt="jQuery" />
          <img src={github} alt="github" />
        </div>
      </div>
      <div style={{ backgroundColor: '#F6F7F9', height: '670px', marginTop: '6%' }}>
        <Typography style={{ fontWeight: 'bold', padding: '4% 0 90px 0', fontSize: '30px', textAlign: 'center', color: '#474E55' }}>
          Powering innovation at 255,000+ companies worldwide
        </Typography>
        <div style={{ marginLeft: '25%' }}>
          <Grid container>
            <Grid item xs={3}>
              <div className={classes.em}>
                <ImageCardComp
                  head1="Reimagining online education and student engagement with Jupiter"
                  head2="See story"
                  imgSrc={card1}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.em}>
                <ImageCardComp
                  head1="Reimagining online education and student engagement with Jupiter"
                  head2="Play Video"
                  imgSrc={card2}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.em}>
                <ImageCardComp
                  head1="Reimagining online education and student engagement with Jupiter"
                  head2="See story"
                  imgSrc={card3}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        className={classes.tryPlanetraDiv}
        style={{ backgroundImage: `url(${footerBackground})` }}>
        <div data-aos="fade-left" data-aos-delay="300">
          <Typography className={classes.tryPlanetraTypo}>
            Try Planeta for 14 days, for free!
          </Typography>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <ButtonComp className={classes.getStartedBtn} >
            Get Started
          </ButtonComp>
        </div>
      </div>
      <div style={{ margin: '0% 8% 0 20%', height: '260px' }}>
        <Grid container>
          <Grid item xs={3}>
            <div style={{ marginTop: '20%' }}>
              <img src={logo} alt="logo" />
            </div>
          </Grid>
          <Grid item xs={9}>
            <Grid container style={{ marginTop: '7%' }}>
              <Grid item xs={4}>
                <div>
                  <Typography className={classes.footerLinkHead}> PRODUCT </Typography>
                  <Typography className={classes.footerLinkSubHead}> Why Planeta </Typography>
                  <Typography className={classes.footerLinkSubHead}> Enterprise </Typography>
                  <Typography className={classes.footerLinkSubHead}> Security </Typography>
                  <Typography className={classes.footerLinkSubHead}> Customer Stories </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Typography className={classes.footerLinkHead}> RESOURCES </Typography>
                  <Typography className={classes.footerLinkSubHead}> Download Jupiter </Typography>
                  <Typography className={classes.footerLinkSubHead}> eBook & Reports </Typography>
                  <Typography className={classes.footerLinkSubHead}> API </Typography>
                  <Typography className={classes.footerLinkSubHead}> Help Center </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div>
                  <Typography className={classes.footerLinkHead}> COMPANY </Typography>
                  <Typography className={classes.footerLinkSubHead}> About Us </Typography>
                  <Typography className={classes.footerLinkSubHead}> Leadership </Typography>
                  <Typography className={classes.footerLinkSubHead}> Blog </Typography>
                  <Typography className={classes.footerLinkSubHead}> News </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.footerDiv}>
        <div style={{ display: 'flex', marginTop: '1%' }}>
          <Typography style={{ color: '#7E8085' }}>Privacy Policy.</Typography>&nbsp;&nbsp;&nbsp;
          <Typography style={{ color: '#7E8085' }}> Terms.</Typography>&nbsp;&nbsp;&nbsp;
          <Typography style={{ color: '#7E8085' }}>  Status</Typography>
        </div>
      </div>
    </div >
  )
}

export default HomePageComp
