import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { detailsService } from '../actions/serviceprovideraction';

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
 
        <div className>
            <div className="backtoresult">
                <Link to="/">
                    <button className="backtoresultbtn">Back to result</button> </Link>
            </div>

            
            {loading? <div>Loading...</div>:
            error? <div> {error} hehehe </div>:


            (

                <div className="details">
                <div className="details-image">
                 <img src={serviceprovider.image} alt="serviceprovider" ></img>   
                 </div>
                 <div className="details-info">
                     <ul>
                         <li>
                           <h4> {serviceprovider.name} </h4>  
                         </li>
                         <li>
                             {serviceprovider.rating} Stars
                         </li>
                         <li>
                           Price:{serviceprovider.rate} $
                         </li>
                         <li>
                             Description:
                              {serviceprovider.description} 
                         </li>
                  </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {serviceprovider.rate}$
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
            </div>
            
            )
}


            
            
     
        </div> )
    
}

export default ServiceScreen;