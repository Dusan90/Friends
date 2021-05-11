import {FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from '../../constants'


const initialState = {
    loading: true,
    data: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_DATA_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_DATA_FAIL:
            return{
                loading: false, 
                data: [],
                error: action.payload
            }
            default: return state
    }
}