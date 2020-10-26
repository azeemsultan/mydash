import React from 'react';

import Paper from '@material-ui/core/Paper';



export default function Newsfeed() {
 
  const submitHandler= (e) =>{

    e.preventDefault();

 

};



  return (

    
  
    <div>
      <h1>
        Post a task here
      </h1>
      <Paper elevation={3} >
        <p>
          Hello hope you doing well nigga
        <div>
         Name: <input>
          </input>
          </div>
          <div>
         Image: <input>
          </input>
          </div>
          <div>
         Category: <input>
          </input>
          </div>
          <div>
         CountInStock: <input>
          </input>
          </div>
          <div>
         Description: <input>
          </input>
          </div>
          <button>Post</button>
        </p>
      </Paper>

    </div>
  );
}