import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bgImage: {
    height: "5019px",
    backgroundRepeat: "no-repeat",
    position: "relative",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  logo: {
    height: "100px",
    backgroundRepeat: "no-repeat",
  },
  workImage: {
    height: "480px",
    backgroundRepeat: "no-repeat",
    // position: "relative",
    // animation: `$workImageAnimation ease 2s`,
    // animationDelay: '0.3s'
  },
  // "@keyframes workImageAnimation": {
  //   "0%": {
  //     left: '275px'
  //   },
  //   "50%": {
  //     left: '0px'
  //   },
  // },
  triangleImage: {
    height: "150px",
    backgroundRepeat: "no-repeat",
  },
  chatImage: {
    height: "390px",
    marginTop: "25%",
    backgroundRepeat: "no-repeat",
  },
  roundBtn: {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: "#3057E6",
  },
  mainHeadTypo: {
    color: "#2C2E30",
    fontSize: "37px",
    fontWeight: "bold",
  },
  subHeadTypo: {
    fontSize: "20px",
    color: "rgba(122, 127, 147, 255)",
    marginBottom: "8%",
  },
  link: {
    cursor: "pointer",
    color: "rgba(0, 0, 0, 0.54)",
  },
  alreadyUsing: {
    marginTop: "7%",
    color: "rgba(122, 127, 147, 255)",
    fontSize: "13px",
  },
  whyFastTypo: {
    color: "#2C2E30",
    fontSize: "25px",
    marginTop: "2%",
  },
  whyFastSubTypo: {
    fontSize: "15px",
    color: "rgba(122, 127, 147, 255)",
  },
  blueCircle: {
    backgroundColor: "#3057E6",
    height: "50px",
    width: "48px",
    borderRadius: "100%",
  },
  textField: {
    width: "22%",
    marginTop: "4%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "45px",
    },
  },
  talkingPeople: {
    height: "630px",
    backgroundRepeat: "no-repeat",
  },
  tryPlanetraDiv: {
    position: "relative",
    height: "400px",
    backgroundRepeat: "no-repeat",
  },
  tryPlanetraTypo: {
    fontSize: "30px",
    color: "white",
    textAlign: "center",
    paddingTop: "7%",
  },
  getStartedBtn: {
    margin: "2% 0 0 45%",
    backgroundColor: "white",
    color: "#2F5BEA",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  footerLinkHead: {
    marginBottom: "2%",
    color: "#3057E6",
    fontWeight: "bold",
  },
  footerLinkSubHead: {
    marginTop: "1%",
    color: "#7E8085",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  footerDiv: {
    backgroundColor: "#F5F7F8",
    height: "75px",
    display: "flex",
    justifyContent: "center",
  },
});

export default useStyles;
