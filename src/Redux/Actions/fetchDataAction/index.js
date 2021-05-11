import {FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from '../../constants'

export function FetchedSuccess(data){
    return{
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export function FetchedFail(){
    return{
        type: FETCH_DATA_FAIL
    }
}