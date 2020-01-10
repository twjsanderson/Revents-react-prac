import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from "./asyncConstants";
import { createReducer } from '../../app/common/util/reducerUtils';

const initialState = {
    loading: false,
    elementName: null
};

const asyncActionStarted = (state, payload) => {
    return {
        ...state, 
        loading: true,
        elementName: payload
    }
}; 

const asyncActionFinished = (state) => {
    return {
        ...state, 
        loading: false,
        elementName: null
    }
}; 

const asyncActionErrors = (state) => {
    return {
        ...state, 
        loading: false
    }
};

export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionStarted,
    [ASYNC_ACTION_FINISH]: asyncActionFinished,
    [ASYNC_ACTION_ERROR]: asyncActionErrors
});