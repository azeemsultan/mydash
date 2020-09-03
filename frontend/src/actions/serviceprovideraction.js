import {SP_LIST_REQUEST,SP_LIST_SUCCESS,SP_LIST_FAIL, SERVICE_DETAIL_REQUEST, SERVICE_DETAIL_SUCCESS, SERVICE_DETAIL_FAIL} from '../constants/serviceproviderconst';
import axios from 'axios';


const listServiceproviders = () => async (dispatch) => {

    try{
    dispatch( {type: SP_LIST_REQUEST});
    const {data} = await axios.get("/api/serviceproviders");
    dispatch({type: SP_LIST_SUCCESS,payload: data})
}
    

    catch(error){
        dispatch({type: SP_LIST_FAIL,payload: error.message});

    }
}
const detailsService= (productId)=> async (dispatch ) => {
    try{
        dispatch({type: SERVICE_DETAIL_REQUEST, payload: productId});
        const {data} = await axios.get("/api/serviceproviders/" + productId);
        dispatch({type: SERVICE_DETAIL_SUCCESS, payload: data}); 
    }
    catch(error){
        dispatch({type: SERVICE_DETAIL_FAIL, payload: error.message});
    }
}
    export {listServiceproviders, detailsService}