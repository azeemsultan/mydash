import Axios from "axios"
import { ADD_TO_CART, CART_REMOVE_ITEM } from "../constants/cartconstants";
import Cookie from 'js-cookie'

const addToCart= (serviceId,qty) => async (dispatch, getState)  =>{
    try{
        const {data}= await Axios.get("/api/serviceproviders/"+ serviceId);
        dispatch({type: ADD_TO_CART, payload:{
            service: data._id,
            name: data.name,
            image: data.image,
            price: data.rate,
            countInStock: data.countInStock,
            qty 
        }
    });
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    }
  

    catch(error){

    }

}
const removeFromCart = (serviceId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: serviceId})

    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}
export { addToCart,removeFromCart}