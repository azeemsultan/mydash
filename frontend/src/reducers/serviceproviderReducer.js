import {SP_LIST_REQUEST, SERVICE_DETAIL_REQUEST, SERVICE_DETAIL_SUCCESS, SERVICE_DETAIL_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, SERVICE_DELETE_REQUEST, SERVICE_DELETE_SUCCESS, SERVICE_DELETE_FAIL} from "../constants/serviceproviderconst";
import {SP_LIST_SUCCESS} from "../constants/serviceproviderconst";
import {SP_LIST_FAIL} from "../constants/serviceproviderconst";


function serviceproviderListReducer(state={serviceproviders:[] }, action){
    switch (action.type) {
       
        case SP_LIST_REQUEST:
        return {loading: true, serviceproviders:[]};

        case SP_LIST_SUCCESS:
            return {loading: false, serviceproviders: action.payload};

            case SP_LIST_FAIL:
                return {loading: false, error: action.payload}

                default:
                    return state;

    }
}

function serviceproviderDetailReducer(state={serviceprovider:{} }, action){
    switch (action.type) {
       
        case SERVICE_DETAIL_REQUEST:
        return {loading: true};

        case SERVICE_DETAIL_SUCCESS:
            return {loading: false, serviceprovider: action.payload};

            case SERVICE_DETAIL_FAIL:
                return {loading: false, error: action.payload}

                default:
                    return state;

    }
    
}

function serviceSaveReducer(state={serviceprovider:{} }, action){
    switch (action.type) {
       
        case PRODUCT_SAVE_REQUEST:
        return {loading: true};

        case PRODUCT_SAVE_SUCCESS:
            return {loading: false, success: true, serviceprovider: action.payload};

            case PRODUCT_SAVE_FAIL:
                return {loading: false, error: action.payload}

                default:
                    return state;

    }
    
}

function serviceDeleteReducer (state={serviceprovider:{} }, action){
    switch (action.type) {
       
        case SERVICE_DELETE_REQUEST:
        return {loading: true};

        case SERVICE_DELETE_SUCCESS:
            return {loading: false, serviceprovider: action.payload, success: true};

            case SERVICE_DELETE_FAIL:
                return {loading: false, error: action.payload}

                default:
                    return state;

    }
    
}

export { serviceproviderListReducer, serviceproviderDetailReducer, serviceSaveReducer, serviceDeleteReducer}