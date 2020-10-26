import { Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import img from './work.jpg'

const SpRegister = () => {
    return (  <div>
       <Grid container>
      <Grid item md={1}>

      </Grid>
      <Grid item md={7} xs={12}>
          <h2>
              Join us as a Service Provider
          </h2>
          <p>
              Welcome to join XsSupport community as a Service Provider, we hope you will make your living better with our platform
          </p>
      <img style={{marginTop:'20px',width:'90%',height:'auto'}} src={img}></img>
      </Grid>
      <Grid item md={3} xs={10}> 
       <Paper elevation={3} style={{marginTop:'20px',marginLeft:'10px'}}>

           <div style={{marginLeft:'20px',marginTop:'40px'}}>

           <h5 style={{paddingTop:'20px'}}>Name</h5>
       <input style={{width:'80%'}} type='text' placeholder='Enter your Name'/>

               <h5>Email</h5>
       <input style={{width:'80%'}} type='text' placeholder='Enter your Email'/>

       <h5>Category</h5>
       <input style={{width:'80%'}} type='text' placeholder='Enter your Category'/>

       <h5> Password</h5>
       <input  style={{width:'80%'}} type='password' placeholder='Enter your Password'/>

       <h5>Confirm Password</h5>
       <input style={{width:'80%'}} type='password' placeholder='Enter your Password'/>
    
       </div>
       <button style={{marginBottom:'30px',marginTop:'30px',marginLeft:'20px',width:'80%',backgroundColor:'#4a95f7',borderRadius:'9px',color:'white',fontSize:'20px'}}>Register</button>
       </Paper>
      </Grid>
      <Grid item md={1}>

      </Grid>
       </Grid>
    </div>);
    
}
 
export default SpRegister;