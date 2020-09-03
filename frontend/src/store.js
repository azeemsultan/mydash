import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { serviceproviderListReducer, serviceproviderDetailReducer} from './reducers/serviceproviderReducer';
import { cartReducer } from './reducers/cartReducer';

const initialState= {};
const reducer = combineReducers({
    serviceproviderList: serviceproviderListReducer,
    serviceDetails: serviceproviderDetailReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;