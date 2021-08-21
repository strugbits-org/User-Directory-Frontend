import React, { useState } from "react";
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
import AppleIcon from '@material-ui/icons/Apple';
import dotsImage from "../../assets/leftDots.png";
import blueDotsImage from "../../assets/dotsBlue.png";
const axios = require('axios');

const LoginPageComp = () => {
	const classes = useStyles();

	const [userDetails, setUserDetails] = useState();

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setUserDetails((prev) => ({ ...prev, [name]: value }));
	}

	const onClickHandler = async (e) => {
		e.preventDefault();

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}

			const body = JSON.stringify(userDetails);
			const resp = await axios.post('/api/user/login', body, config);
			console.log(resp.data);
		} catch (err) {
			console.error(err.response.data);
		}
	}

	return (
		<div>
			<Grid container>
				<Grid style={{ marginTop: '3%' }} item xs={2}>
					<div className={classes.dotsImage} style={{ backgroundImage: `url(${dotsImage})` }} />
				</Grid>
				<Grid item xs={5}>
					<div className={classes.dotsImage} style={{ backgroundImage: `url(${blueDotsImage})` }} >
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
								<Button
									variant="contained"
									color="primary"
									className={classes.appleBtn}
									startIcon={<AppleIcon />}
								>
									{/* <span style={{ fontSize: '9px' }}>Download on</span> &nbsp; <br /> */}
									App Store
								</Button>
								<Button
									variant="contained"
									color="primary"
									className={classes.googleBtn}
									startIcon={<ArrowRightTwoToneIcon />}
								>
									Google Play
								</Button>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item xs={3}>
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
									<TextFieldComp
										className={classes.textField}
										label="Email"
										name="email"
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
								<Grid item xs={6}>
									<CheckBoxComp className={classes.checkBox} label="Remember Me" />
								</Grid>
								<Grid item xs={6}>
									<div style={{ margin: '8% 0% 0 0' }}>
										<Link href="/forgot-password" className={classes.link}> Forgot Password? </Link>
									</div>
								</Grid>
								<Grid item xs={12}>
									<Button
										variant="contained"
										color="primary"
										className={classes.loginBtn}
										endIcon={<ArrowRightTwoToneIcon />}
										onClick={onClickHandler}
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
												Want a new account?
											</Typography>
										</div>
										<div style={{ flex: '0.5' }}>
											<Typography className={classes.cardFooterTypo2}>
												<a style={{ color: 'white' }} href="/register"> Sign up now! </a>
											</Typography>
										</div>
									</div>
								</Grid>
							</Grid>
						</Card>
					</div>
				</Grid>
				<Grid item xs={2}>

				</Grid>
			</Grid>
		</div>
	)
}

export default LoginPageComp;