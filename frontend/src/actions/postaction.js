import {POST_LIST_REQUEST,POST_LIST_SUCCESS,POST_LIST_FAIL} from '../constants/postconstants';
import axios from 'axios';




const savePost = (post) => async (dispatch, getState) =>{
    try{
        dispatch({type: POST_SAVE_REQUEST, payload: post});
        const {userSignin: {userInfo}} = getState();
        if(!serviceprovider._id)
        {
            const { data } = await axios.post('/Newsfeed/newsfeed/', serviceprovider, {header:
                {
                'Authorization': 'Bearer' + userInfo.token
            }
        });
        dispatch({type:POST_SAVE_SUCCESS, payload: data});
    } 
        else {
            const {data} = await axios.put('/Newsfeed/newsfeed/'+serviceprovider._id, serviceprovider, {header:
                {
                'Authorization': 'Bearer' + userInfo.token
            }
        });
        dispatch({type:POST_SAVE_SUCCESS, payload: data});
        }
     
 

    }
    catch(error){
        dispatch({type:PRODUCT_SAVE_FAIL, payload: error.message});
    }
}