import React from "react";
import {
    Typography,
    Grid,
    Card,
    Link,
    Button,
  } from '@material-ui/core';
import useStyles from "./LoginPageCompStyle"; 
import TextFieldComp from "../../shared/components/textField/TextFieldComp";
import CheckBoxComp from "../../shared/components/checkbox/CheckBoxComp";
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import facebook from "../../assets/facebook.jpg";
import twitter from "../../assets/twitter.jpg";
import google from "../../assets/google.jpg";

const LoginPageComp = () => {
    const classes = useStyles();

    return(
        <div>
            <div className={classes.card}>
                <Card>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                           <div className={classes.cardHeader}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.cardHeaderTypo}>
                                Login into your account
                            </Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <TextFieldComp className={classes.textField} label="User Name" />
                        </Grid>
                        <Grid item xs={11}>
                            <TextFieldComp className={classes.textField} label="Password" />
                        </Grid>
                        <Grid item xs={6}>
                            <CheckBoxComp className={classes.checkBox} label="Remember Me" />
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{ margin: '8% 0% 0 0' }}>
                                <Link className={classes.link}> Forgot Password? </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.loginBtn}
                            endIcon={<ArrowRightTwoToneIcon />}
                        >
                            LOG IN
                        </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.socialTypo}>
                                Login with social Media
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.socialCont}>
                                <div className={classes.socialIcons}>
                                    <img src={facebook} style={{ height: '50px' }} alt="facebook" />
                                </div>
                                <div className={classes.socialIcons}>
                                    <img src={twitter} style={{ height: '50px' }} alt="facebook" />
                                </div>
                                <div className={classes.socialIcons}>
                                <img src={google} style={{ height: '50px' }} alt="facebook" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                           <div className={classes.cardFooter}></div>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </div>
    )
}

export default LoginPageComp;