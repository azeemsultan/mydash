import { ADD_TO_CART,CART_REMOVE_ITEM } from "../constants/cartconstants";

function cartReducer(state={cartItems:[]}, action){
    switch(action.type){
        case ADD_TO_CART:
            const item= action.payload;
            const service= state.cartItems.find(x=> x.service=== item.service);

            if(service){
               return {...state, cartItems: state.cartItems.map(x=> x.service===service.service? item : x)};
            }

            return{
                ...state, cartItems: [...state.cartItems, item] 
            };
            case CART_REMOVE_ITEM:
                return{ cartItems: state.cartItems.filter(x=>x.service !== action.payload)}

            default:
                return state
    }
}

export { cartReducer}