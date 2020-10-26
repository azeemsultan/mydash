import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

const PostTask = () => {
    return ( 
        <Grid container>
         <Grid item md={3}>

         </Grid>
         <Grid item md={6} xs={12}>
         <Paper elevation={3} >
         
         <Typography variant='h3' style={{textAlign:'center',marginTop:'20px',paddingTop:'20px'}}>
             Post a task
         </Typography>
        <div style={{marginLeft:'20px',marginRight:'20px',textAlign:'center'}}>
         <div >
             <h6>
                 Title
             </h6>
         <input style={{width:'60%'}} type='text'/>
        </div>
        <div>
        <h6>
                 Category
             </h6>
         <input style={{width:'60%'}} type='text'/>
        </div>
        <div>
        <h6>
                 Location
             </h6>
         <input style={{width:'60%'}} type='text'/>
        </div>
        <div>
        <h6>
                 Budget
             </h6>
         <input style={{width:'60%'}} type='text'/>
         </div>
         <div>
        <h6>
                 Description
             </h6>
         <textarea style={{width:'60%',height:'100px'}} type='text'/>
         </div>
         </div>
         <button style={{marginTop:'20px',marginBottom:'20px',marginLeft:'30%',width:'40%',marginRight:'30%',}}>Post</button>
         </Paper>
         </Grid>

         <Grid item md={3}>

</Grid>
        </Grid>
     );
}
 
export default PostTask;
