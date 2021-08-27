import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((_theme) => ({
  formControl: {
    minWidth: ({ minWidth }) => minWidth,
  },
  select: {
    height: "41px",
  },
}));

export default useStyles;
