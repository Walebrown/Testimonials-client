import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => 
  ({

  link:{
    width: '100vw',
    margin: 0,
    [theme.breakpoints.down('sm')]:{
      padding: 0,
     // width: '70%',
    },
  }
}))