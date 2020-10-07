import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    foot: {
        position: "fixed",
        left: 0,
        bottom:0,
        widith: "100%",
        height: "70px"
        
      },
      typo: {
         marginLeft: "45%",
         marginRight: "45%",
         marginTop: "50%",
         marginBottom: "50%"
      }
  }))

  
const Footer = () => {
    const classes = useStyles();
    return ( 
        <Grid container>
      <AppBar className={classes.foot} position="static" style={{backgroundColor:'#4a95f7'}}>
          <Toolbar>
              <Typography variant="h5" className={classes.typo}>
                  All rights reserved.
              </Typography>
          </Toolbar>
      </AppBar>
      </Grid>
    );
}
 
export default Footer;