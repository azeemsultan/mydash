import {POST_LIST_REQUEST,POST_LIST_SUCCESS,POST_LIST_FAIL} from '../constants/postconstants';
import axios from 'axios';


const listPost = () => async (dispatch) => {

    try{
    dispatch( {type: POST_LIST_REQUEST});
    const {data} = await axios.get("/api/profile");
    dispatch({type: POST_LIST_SUCCESS,payload: data})
}
    

    catch(error){
        dispatch({type: POST_LIST_FAIL,payload: error.message});

    }
}


export {listPost}