import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  blueCircle: {
    backgroundColor: "#3057E6",
    height: "49px",
    width: "51px",
    borderRadius: "100%",
  },
  root: {
    borderTopLeftRadius: "40px",
    borderBottomLeftRadius: "40px",
    borderTopRightRadius: "40px",
    borderBottomRightRadius: "40px",
    display: "flex",
    marginTop: "10%",
    width: "60%",
    padding: "2%",
    backgroundColor: "#F6F7F9",
    cursor: "pointer",
  },
});

export default useStyles;
