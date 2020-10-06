import {SP_LIST_REQUEST,SP_LIST_SUCCESS,SP_LIST_FAIL, SERVICE_DETAIL_REQUEST, SERVICE_DETAIL_SUCCESS, SERVICE_DETAIL_FAIL, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, SERVICE_DELETE_SUCCESS, SERVICE_DELETE_FAIL, SERVICE_DELETE_REQUEST} from '../constants/serviceproviderconst';
import axios from 'axios';
import Axios from 'axios';
import { serviceproviderListReducer } from '../reducers/serviceproviderReducer';


const listServiceproviders = () => async (dispatch) => {

    try{
    dispatch( {type: SP_LIST_REQUEST});
    const {data} = await axios.get("/api/serviceproviders");
    dispatch({type: SP_LIST_SUCCESS,payload: data})
}
    

    catch(error){
        dispatch({type: SP_LIST_FAIL, payload: error.message});

    }
}

const saveService = (serviceprovider) => async (dispatch, getState) =>{
    try{
        dispatch({type: PRODUCT_SAVE_REQUEST, payload: serviceprovider});
        const {userSignin: {userInfo}} = getState();
        if(!serviceprovider._id)
        {
            const { data } = await axios.post('/api/serviceproviders', serviceprovider, {header:
                {
                'Authorization': 'Bearer' + userInfo.token
            }
        });
        dispatch({type:PRODUCT_SAVE_SUCCESS, payload: data});
    } 
        else {
            const {data} = await axios.put('/api/serviceproviders/'+serviceprovider._id, serviceprovider, {header:
                {
                'Authorization': 'Bearer' + userInfo.token
            }
        });
        dispatch({type:PRODUCT_SAVE_SUCCESS, payload: data});
        }
     
 

    }
    catch(error){
        dispatch({type:PRODUCT_SAVE_FAIL, payload: error.message});
    }
}

const detailsService= (serviceId)=> async (dispatch ) => {
    try{
        dispatch({type: SERVICE_DETAIL_REQUEST, payload: serviceId});

        const {data} = await axios.get("/api/serviceproviders/" + serviceId);
        dispatch({type: SERVICE_DETAIL_SUCCESS, payload: data}); 
    }
    catch(error){
        dispatch({type: SERVICE_DETAIL_FAIL, payload: error.message});
    }
}

const deleteService= (serviceId)=> async (dispatch , getState) => {
    try{
        const { userSignin: {userInfo} }= getState();
        dispatch({type: SERVICE_DELETE_REQUEST, payload: serviceId});

        const {data} = await axios.delete("/api/serviceproviders/" + serviceId, {
            header:{
                Authorization: 'Bearer' + userInfo.token
            }
        });
        dispatch({type: SERVICE_DELETE_SUCCESS, payload: data, success: true}); 
    }
    catch(error){
        dispatch({type: SERVICE_DELETE_FAIL, payload: error.message});
    }
}

    export {listServiceproviders, detailsService, saveService, deleteService}