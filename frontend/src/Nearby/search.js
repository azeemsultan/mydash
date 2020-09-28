import React from 'react';

import {TextField, Typography, Button} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Gmaps from './Gmaps';
import ServiceNear from './serviceNear';




const Search = () => {




  const getLocation = (e) =>{
    console.warn(e.target.value)
  }

  
   return (

<Grid container>

        
     <Grid item 
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
  <Button style={{
    backgroundColor: 'grey',
    marginLeft: 400,
    color: 'white'
  }
  }> Enter </Button>
  
  <ServiceNear />

  <Grid item sm={6}>
<Gmaps/>
</Grid>
     </Grid>
    
     </Grid>
   
     );
}
 
export default Search;