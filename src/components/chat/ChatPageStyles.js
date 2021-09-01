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
  autoComplete: {
    marginLeft: '40px',
    "& .MuiFormControl-fullWidth": {
      backgroundColor: "rgba(255,255,255,0.3)",
    },
  },
  searchField: {
    // "& .MuiOutlinedInput-notchedOutline": {
    //   borderTopLeftRadius: "27px",
    //   borderBottomLeftRadius: "27px",
    //   borderTopRightRadius: "27px",
    //   borderBottomRightRadius: "27px",
    // },
    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
      color: "white",
      fontSize: "20px",
    },
  },
  rightUserProfileImg: {
    height: "200px",
    borderRadius: "50%",
    margin: "16% 0 0 24%",
  },
  rightUserProfileText: {
    margin: "25px 12px 0 3%",
    textAlign: "center",
  },
  rightUserProfileSubText: {
    margin: "10px 12px 0 3%",
    textAlign: "center",
  },
  convoActive: {
    backgroundColor: "rgba(245, 243, 243,0.3)",
    // boxShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
  },
});

export default useStyles;
