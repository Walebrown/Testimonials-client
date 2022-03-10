import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import vasitiLogo from './VasitiLogo.jpg';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
    justifyContent: 'center',
    marginRight:40,
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    alignItem: 'center'
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "white",
      background:'#FF5C00',
      borderBottom: "1px solid white",
      boxShadow: '1px 4px 8px rgba(239, 88, 3, 0.2)',
      borderRadius: '4px',
      paddingLeft: '10px',
      paddingRight: '10px',
      
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style= {{background:'white', paddingLeft:'0', paddingRight:'0' }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4"  className={classes.logo}>
          <img src={vasitiLogo} alt="vasitilogo" />
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/about" className={classes.link}>
              ABOUT US
            </Link>
            <Link to="/stores" className={classes.link}>
              STORES
            </Link>
            <Link to="/contact" className={classes.link}>
              CONTACT
            </Link>
            <Link to="/logIn" className={classes.link}>
              LOG IN
            </Link>
            <Link to="/signUp" className={classes.link}>
              SIGN UP
            </Link>
            <Link to="/testimonials" className={classes.link}>
              SHARE YOUR STORY
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;