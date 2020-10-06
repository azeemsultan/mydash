import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie'
import { serviceproviderListReducer, serviceproviderDetailReducer, serviceSaveReducer, serviceDeleteReducer} from './reducers/serviceproviderReducer';
import { cartReducer } from './reducers/cartReducer';
import { postListReducer } from './reducers/postReducer';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;
const initialState= {cart: {cartItems}, userSignin: { userInfo}};
const reducer = combineReducers({
    serviceProviderList: serviceproviderListReducer,
    serviceDetails: serviceproviderDetailReducer,
    cart: cartReducer,
    post: postListReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    serviceSave:  serviceSaveReducer,
    serviceDelete: serviceDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;