import Axios from "axios"
import { ADD_TO_CART, CART_REMOVE_ITEM } from "../constants/cartconstants";

const addToCart= (serviceId,qty) => async (dispatch)  =>{
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
    }
    catch(error){

    }

}
const removeFromCart = (serviceId) => (dispatch) => {
    dispatch({type: CART_REMOVE_ITEM, payload: serviceId})
}
export { addToCart,removeFromCart}