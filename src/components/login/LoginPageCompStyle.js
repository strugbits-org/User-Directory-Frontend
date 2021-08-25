import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  card: {
    width: "27%",
    position: "absolute",
    top: "10%",
  },
  cardHeader: {
    backgroundImage: "linear-gradient(to right, #6075cb, #090979)",
    height: "15px",
  },
  cardHeaderTypo: {
    fontSize: "22px",
    margin: "5% 0 3% 0",
    textAlign: "center",
  },
  textField: {
    marginLeft: "8%",
    width: "90%",
  },
  checkBox: {
    margin: "4% 0 0 20%",
    color: "rgba(0, 0, 0, 0.54)",
  },
  link: {
    cursor: "pointer",
    color: "rgba(0, 0, 0, 0.54)",
  },
  loginBtn: {
    padding: "15px",
    margin: "4% 0 2% 12%",
    width: "40%",
    backgroundImage: "linear-gradient(to right, #6075cb, #090979)",
  },
  socialTypo: {
    margin: "3% 0 0 12%",
    fontSize: "17px",
  },
  socialCont: {
    display: "flex",
    height: "43px",
    justifyContent: "space-evenly",
    margin: "1% 0 4% 8%",
    width: "55%",
  },
  socialIcons: {
    flex: "0.2",
    cursor: "pointer",
  },
  cardFooter: {
    // backgroundColor: '#4350a5',
    height: "68px",
    display: "flex",
    paddingTop: "5%",
    backgroundImage: "linear-gradient(to right, #6075cb, #090979)",
  },
  cardFooterTypo: {
    color: "white",
    textAlign: "center",
  },
  cardFooterTypo2: {
    fontWeight: 900,
    textAlign: "center",
    textDecoration: "underline",
  },
  greatAppTypo: {
    color: "rgba(65, 80, 138, 255)",
    fontSize: "40px",
  },
  subHeadTypo: {
    fontSize: "14px",
    color: "rgba(122, 127, 147, 255)",
    marginBottom: "8%",
  },
  appleBtn: {
    marginRight: "2%",
    backgroundColor: "#ffb55d",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    "&:hover": {
      backgroundColor: "#ffb55d",
    },
  },
  googleBtn: {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundImage: "linear-gradient(to right, #6075cb, #090979)",
  },
  dotsImage: {
    height: "80%",
    backgroundRepeat: "no-repeat",
    position: 'absolute',
    top:'10px'
  },
  blueDotsImage: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    position: 'absolute',
    top:'1px'
  }
});

export default useStyles;
