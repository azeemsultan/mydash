import { Grid, Avatar, InputLabel, Input, Divider, Typography, Button, List } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import React from 'react';
import nikklaus from './nikklaus.jpg'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import CardMedia from '@material-ui/core/CardMedia';
import bk from './bk.jpg'
const Posts = () => {
    return ( 
        <Grid container>
        <Grid container style={{marginTop:'20px', backgroundColor:'#edf0f2'}}>
          <div className="avatar"> <Avatar style={{height:'60px',width:'60px',marginLeft:'10px'}} src={nikklaus}/> 
          </div> 
         <div> 
             <input style={{maxWidth:'300px',width:'400px',height:'40px',marginTop:'5px', borderRadius:'99px', paddingLeft:'20px',marginLeft:'10px', borderColor:"white",borderBlockEndColor:"grey"
            }} type="text" placeholder="What's on your mind dawg?"/>
          
             </div> 
             <div style={{marginLeft:'10px', marginTop:'10px'}}>
             <PhotoCameraIcon style={{fontSize:'40px', color:'#3254a8', marginLeft:'40px'}}/>
             <PhotoLibraryIcon style={{fontSize:'40px', marginLeft:'40px', color:'#27ab2c'}}/>
             <VideocamIcon style={{fontSize:'40px', marginLeft:'40px', color:'red'}}/>
           
             </div>
             <Divider/>
             <Button variant="contained" style={{width:'150px', height:'40px', marginLeft:'50px', marginTop:'9px', color:'blue',fontSize:'20px',paddingTop:'5px'}}>Post</Button> 
        </Grid>
         <Grid container style={{marginTop:'40px', marginLeft:'20px'}}>
             <div>
                 <div>      <Avatar src={nikklaus}/>  <Typography style={{marginTop:'5px'}} variant="subtitle2">
                    25 September 2020 at 01:05 </Typography></div>
       
              <Typography variant="h4">
                    Klaus Mikaelson</Typography>
                    <Typography variant="h6" style={{marginTop:'5px'}}>
                    Acting k to badshah ho bhai </Typography>

                    <CardMedia
                    style={{height:'300px', maxWidth:'450px', marginTop:'5px'}}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={bk}
          title="Contemplative Reptile"
        />
        <List>
         <div className="avatar"> <Avatar style={{height:'40px',width:'40px',marginLeft:'10px',marginTop:'10px'}} src={nikklaus}/>  </div>
         <input style={{maxWidth:'300px',width:'300px',height:'30px',marginTop:'5px', borderRadius:'99px', paddingLeft:'20px',marginLeft:'10px', borderColor:"white",borderBlockEndColor:"grey"
            }} type="text" placeholder="Write a comment..."/>
         
          </List>
       
             </div>
         </Grid>
        </Grid>

);
}

export default Posts;

