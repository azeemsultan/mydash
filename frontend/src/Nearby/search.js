import React from 'react';

import {TextField, Typography, Button} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Gmaps from './Gmaps';




const Search = () => {




  const getLocation = (e) =>{
    console.warn(e.target.value)
  }

  
   return (

<Grid container>

        
     <Grid item md
     >
    <div style={{ marginLeft:30}}>
    <h2
            style={{marginTop:20, color:'#E5EAF5'}}
            >
                Manually add your location</h2>
     <TextField 
     inputProps={{style: {fontSize: 25 , fontFamily:"Courier New",color:'#E5EAF5'}}}
    InputLabelProps={{style: {fontSize:25, color:'#E5EAF5', fontFamily:"Courier New"}}}
    size='medium'
    label="Enter City"
   onChange={getLocation}
    />
    </div>
    <div style={{marginTop:30,  marginLeft:30}}>
        <TextField 
      inputProps={{style: {fontSize: 25 , fontFamily:"Courier New",color:'#E5EAF5'}}}
    InputLabelProps={{style: {fontSize:25, color:'#E5EAF5', fontFamily:"Courier New"}}}
    size='medium'
    label="Enter Area"
   onChange={getLocation}
    />
    </div>
<div style={{marginTop:30 , marginLeft:30}}>
<TextField 
    inputProps={{style: {fontSize: 25 , fontFamily:"Courier New",color:'#E5EAF5'}}}
    InputLabelProps={{style: {fontSize:25, color:'#E5EAF5', fontFamily:"Courier New"}}}
    size='medium'
    label="Enter Address"
   onChange={getLocation}
   
    />

    </div>



    <div>
    
      <Grid container>

      <Grid item md={5}>
        <h4 style={{marginLeft:20}}>
          Nothing to show here 
        </h4>
      </Grid>
      
      <Grid item md={1}>
    
    <Button 
    style={{marginTop:10, marginLeft:10, fontSize:20, backgroundColor:'#0049B7', color:'#E5EAF5' }}
    variant="contained" >
      Search
    </Button>

    </Grid>

    </Grid>
    </div>
 
     </Grid>
     
   
     <Grid item md="6">
     <div style={{alignItems:'center',marginLeft:120 }}>
       <Gmaps/>
     
       </div>
     </Grid>
   
     
     </Grid>
   
     );
}
 
export default Search;