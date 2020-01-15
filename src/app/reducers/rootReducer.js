import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import testReducer from "../../features/testArea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore';

// react-redux-toastr, react-redux-firebase and redux-firestore comes with pre-made reducers
// so we rename the toastr reducer and add it straight to rootReducer

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer
})

export default rootReducer;