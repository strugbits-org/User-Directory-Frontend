import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainDiv: {
    position: "absolute",
    top: "180px",
    padding: "5%",
    height: "142px",
    width: "185px",
    backgroundColor: "white",
  },
  head1Typo: {
    fontSize: "14px",
    color: "#7E8085",
  },
  head2Typo: {
    marginTop: "20%",
    fontSize: "10",
    color: "#3057E6",
    "&:hover":{
      cursor: "pointer",
    }
  },
});

export default useStyles;
