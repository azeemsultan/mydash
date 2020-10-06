import React from 'react';
import {useState,useEffect} from 'react';
import nikklaus from './nikklaus.jpg'
import CardMedia from '@material-ui/core/CardMedia';
import bk from './bk.jpg'
import axios from 'axios'
import data from '../data'
import { Avatar, List, Typography } from '@material-ui/core';




const Createpost = (props) => {

    const serviceproviders = data
    const [post,setPost]= useState([]);
  
    useEffect(()=>{
   const fetchData = async ()=>{
     const data = await axios.get('api/posts');
     setPost(data)
   }
      return()=>{
  
      };
 },[]
    )


    return ( 
  
        <div> 
        <div>      <Avatar  src={nikklaus}/>  <Typography style={{marginTop:'5px'}} variant="subtitle2">
           25 September 2020 at 01:05 </Typography></div>

     <Typography variant="h4">
 {serviceproviders.name}</Typography>
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
    
     );
}
 
export default Createpost;