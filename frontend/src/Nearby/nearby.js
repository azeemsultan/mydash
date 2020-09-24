import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import CustomizedInputBase from './search';
import Search from './search';
import ServiceNear from './serviceNear';

const NearBy = () => {
    return (
    <div
        style={{backgroundColor:"#6c8ab8", fontFamily:"Courier New"}}
    >
        <div>
        <Search />
        </div>
       
      <div>
      <ServiceNear/>

      </div>
     <div>
         s
     </div>
    </div>  );
}
 
export default NearBy;


