import React from 'react';
import {Grid, Divider, Typography, ListItemIcon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import nikklaus from './nikklaus.jpg'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Posts from './postingArea';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#fcfcfc',
      height:'900px',
      marginTop: '20px'
    },
    avatarst:{
        width: 250,
        height: 250,
        marginLeft: '15px',
        marginTop: '20px'
    }
  }));

  
const Profile = () => {
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;
    const classes = useStyles();
    return ( 
      <Grid container direction="coloumn">
          <Grid item sm={3} xs={12}>
          <List className={classes.root}>
      <ListItem>
        <Avatar className={classes.avatarst}  alt="Remy Sharp" src={nikklaus}/>
      
      </ListItem>
      <div style={{marginLeft:'20px'}}>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton  color="primary" aria-label="upload picture" component="span">
          <PhotoCamera  style={{fontSize:'30px'}}/>
        </IconButton>
      </label>
      </div>
      <Typography className={classes.avatarst} variant="h3"  style={{color:'#6042f5' , marginLeft:'40px'}}>
      {userInfo.name}
          <Divider style={{marginTop:'30px'}}/>
          Dashboard
          <Divider style={{marginTop:'30px'}}/>
          Settings
          <Divider style={{marginTop:'20px'}}/>
           Messages
     
      </Typography>
 
    </List>
          </Grid>
          <Grid item sm={1}>
   
          </Grid>
          <Grid item sm={7} xs={12} style={{background: '#fcfcfc',marginTop:'20px'}} > 
              <Posts/>
          </Grid>
          <Grid item sm={1}>
            
          </Grid>
      </Grid>
    );
}
 
export default Profile;