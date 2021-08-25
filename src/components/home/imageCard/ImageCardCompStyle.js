import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
  },
  mainDiv: {
    position: "absolute",
    top: "180px",
    padding: "10%",
    height: "168px",
    width: "222px",
    backgroundColor: "white",
    cursor: "pointer",
  },
  head1Typo: {
    fontSize: "14px",
    color: "#7E8085",
  },
  head2Typo: {
    marginTop: "20%",
    fontSize: "10",
    color: "#3057E6",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default useStyles;
