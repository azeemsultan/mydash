import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartaction';
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { serviceproviderListReducer } from '../reducers/serviceproviderReducer';

function CartScreen(props){

     const cart = useSelector(state => state.cart);

     const {cartItems} = cart;
     const removeFromCartHandler= (serviceId) =>{
         dispatch(removeFromCart(serviceId));
     }

     const checkoutHandler = () =>
     {
         props.history.push("/signin?redirect=shipping");
     }
    const serviceId= props.match.params.id;
    const qty = props.location.search ? Number (props.location.search.split("qty")[1]):1;
   
    const dispatch = useDispatch();
    useEffect(()=>
    {
        if(serviceId)
        {
            dispatch(addToCart(serviceId,qty));
        }
    }, [])
    
    return(
        
        <div className="cart">
            <div className="cart-list">
            <ul className="cart-list-container">
            <li className="cart-list-item">
                <h3>
               
                    Shopping Cart
                </h3>
                <div className="price">
                    Price
                </div>
                </li>
                
              <div></div>  
            {
                cartItems.length === 0? 
                <div>
                    Cart is empty
                    <hr/>
                </div>
             
                :
                cartItems.map( item =>
                    <li>
                    <div className="cart-image">
                        <img  src={item.image} alt="serviceprovider" />
                        </div>
                        <div className="cart-name">
                            <div>
                                <Link to={"/serviceprovider/" + item.name}>
                                {item.name}
                                </Link>
                                
                            </div>
                            <div>
                                <br/>
                                Hours:
                                <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                </select>
                                <button type="button" className="btn-remove" onClick={()=> removeFromCartHandler (item.service)}>
                                    Remove
                                     
                                </button>
                                <hr/>
                            </div>
                        </div>
                      
                        <div className="cart-price">
                           {item.price}$
                            <hr/>
                        </div> 
                        
                    </li>
                    
                )      
            }
            
            </ul>

         
          
            </div>
           
            <div className="cart-action">
            <h3>
                Subtotal ( {cartItems.reduce((a,c)=> a+c.qty , 0)} hours)
                  : $
             {cartItems.reduce((a,c) => a + c.price* c.qty, 0)}
             </h3>
            <button onClick={checkoutHandler} className="button-primary" disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>
            <hr/>
            </div>
          
        </div>
        
    )
}

export default CartScreen;