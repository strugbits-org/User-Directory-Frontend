import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainDiv: {
    height: "150px",
    width: "215px",
    marginLeft: "25px",
    border: "1px solid #EAEAEA",
    padding: "4%",
  },
  content: {
    color: "#7E8085",
    fontSize: "12px",
  },
  author: {
    color: "#474E55",
    fontSize: "14px",
    fontWeight: "bold",
  },
  imageDiv: {
    position: "absolute",
    bottom: "130px",
  },
});

export default useStyles;
