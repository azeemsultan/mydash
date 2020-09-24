import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    foot: {
        position: "fixed",
        left: 0,
        bottom:0,
        widith: "100%"
        
      },
      typo: {
         paddingLeft: "50%"
      }
  }))

  
const Footer = () => {
    const classes = useStyles();
    return ( 
        <Grid container>
      <AppBar className={classes.foot} position="static">
          <Toolbar>
              <Typography className={classes.typo}>
                  All rights reserved.
              </Typography>
          </Toolbar>
      </AppBar>
      </Grid>
    );
}
 
export default Footer;