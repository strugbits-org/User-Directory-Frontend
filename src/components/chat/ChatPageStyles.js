import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  typeMsg: {
    "& .MuiOutlinedInput-multiline": {
      borderTopLeftRadius: "27px",
      borderBottomLeftRadius: "27px",
      borderTopRightRadius: "27px",
      borderBottomRightRadius: "27px",
    },
  },
  searchField: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderTopLeftRadius: "27px",
      borderBottomLeftRadius: "27px",
      borderTopRightRadius: "27px",
      borderBottomRightRadius: "27px",
    },
  },
  rightUserProfileDiv: {
    padding: "10px",
    margin: "10%",
    height: "50%",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
  },
  rightUserProfileImg: {
    height: "100px",
    borderRadius: "50%",
    margin: "12% 0 0 37%",
  },
  rightUserProfileText: {
    margin: "20px 12px 0 0%",
    textAlign: "center",
  },
});

export default useStyles;
