import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { detailsService } from '../actions/serviceprovideraction';
import { Button, Grid, Paper } from '@material-ui/core';

function ServiceScreen (props) {
    const [qty, setQty] = useState(1);
    const serviceDetails= useSelector(state=> state.serviceDetails);
    const {serviceprovider, loading, error}= serviceDetails;

    const dispatch = useDispatch();

    useEffect(()=>{
         dispatch(detailsService(props.match.params.id))
        return() =>{
//
        };
    }, [])

    const handleAddToCart = () =>{
        props.history.push("/cart/" + props.match.params.id + "?qty" + qty)
    }

    return(
 
        <Grid container>
           
            
            {loading? <div>Loading...</div>:
            error? <div> {error} hehehe </div>:


            (
             

             
                <div className="details">
                    <Grid item sm={6}>
                <div className="details-image">
                 <img src={serviceprovider.image} alt="serviceprovider" ></img>   
                 </div>
                
                <Link to="/">
                    <Button   style={{marginTop:'20px'}} variant="contained" color="primary">Back to result</Button> </Link>
        

                 </Grid>
                
      
                 <Grid item sm={3} xs={12}>
                     
                 <div className="details-info"  style={{marginTop:'20px'}}>
                     <ul>
                   
                     <li>
                           <h4> {serviceprovider.name} </h4>  
                         </li>
                         <li>
                             {serviceprovider.rating} Stars
                         </li>
                         <li>
                           Price:{serviceprovider.price} $
                         </li>
                         <li>
                             Description:
                              {serviceprovider.description} 
                         </li>

                         
                  </ul>
                </div>
                </Grid>
 
                <Grid item sm={2} xs={12}>
                <div className="details-action" style={{marginTop:'20px'}}>
                    <ul>
                        <li>
                            Price: {serviceprovider.price}$
                        </li>
                        <li>
                            Status: {serviceprovider.countInStock> 0? "Available": "Out of Stock"}
                        </li>
                        <li>
                            Hours: <select value =
                            {qty} onChange={(e) => {setQty(e.target.value)}}>
                              {[...Array(serviceprovider.countInStock).keys()].map(x=>
                                <option key={x+1} value={x+1} >{x+1} </option>

                                )}
                            </select>
                        </li>
                        <li>
                            {serviceprovider.countInStock>0 && <button onClick={handleAddToCart} className="button">Add to Cart</button>
                        
                       
                        }
                            
                        </li>
                    </ul>
                </div>
                </Grid>
            </div>
            
            
            )
}


            
            
     
</Grid>)
    
}

export default ServiceScreen;