import{
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    NEW_SMURF_START,
    NEW_SMURF_SUCCESS,
    NEW_SMURF_FAILURE
} from "../actions/actions"

const initialState ={
    smurfs: [],
    isFetching: false,
    error: ""
}

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return{...state, isFetching: true};
        case FETCH_SMURF_SUCCESS:
            return{...state, isFetching: false, smurfs: action.payload};
        case FETCH_SMURF_FAILURE:
            return{...state, isFetching: false};
        case NEW_SMURF_START:
            return{...state, isFetching: true};
        case NEW_SMURF_SUCCESS:
            return{...state, isFetching: false, smurfs: action.payload};
        case NEW_SMURF_FAILURE:
            return {...state, isFetching: false};
        default:
            return state;
    }
};