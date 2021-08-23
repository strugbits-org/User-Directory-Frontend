import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bgImage: {
    height: "4000px",
    backgroundRepeat: "no-repeat",
    position: "relative",
    overflowX: "hidden",
  },
  logo: {
    height: "100px",
    backgroundRepeat: "no-repeat",
  },
  workImage: {
    height: "480px",
    backgroundRepeat: "no-repeat",
  },
  triangleImage: {
    height: "150px",
    backgroundRepeat: "no-repeat",
  },
  loginRegisterBtn: {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: "#3057E6",
  },
  mainHeadTypo: {
    color: "#2C2E30",
    fontSize: "40px",
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
    marginTop: '2%',
  },
  whyFastSubTypo: {
    fontSize: "15px",
    color: "rgba(122, 127, 147, 255)",
  },
});

export default useStyles;
