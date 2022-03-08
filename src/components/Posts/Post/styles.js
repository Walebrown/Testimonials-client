import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
  },

  media: {
    marginButtom: 5,
  },
  fullName: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "29px",
    /* identical to box height */

    letterSpacing: "0.02em",

    color: "#474747",
  },

  details: {
    display: "flex",
    justifyContent:'spaceBetween',
    alignContent: 'center',
    marginButtom: 10
  },
  role: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "16px",
    /* identical to box height */

    letterSpacing: "0.02em",

    color: "#0D019A",
  },
  city: {},

  story: {
    width: "300px",
    height: "264px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "16px",
    /* identical to box height */

    letterSpacing: "0.02em",

    color: "#0D019A",
  },
});
