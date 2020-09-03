import {SP_LIST_REQUEST, SERVICE_DETAIL_REQUEST, SERVICE_DETAIL_SUCCESS, SERVICE_DETAIL_FAIL} from "../constants/serviceproviderconst";
import {SP_LIST_SUCCESS} from "../constants/serviceproviderconst";
import {SP_LIST_FAIL} from "../constants/serviceproviderconst";


function serviceproviderListReducer(state={serviceproviders:[] }, action){
    switch (action.type) {
       
        case SP_LIST_REQUEST:
        return {loading: true};

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

export { serviceproviderListReducer, serviceproviderDetailReducer}