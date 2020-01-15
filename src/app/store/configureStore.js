import { createStore, applyMiddleware } from "redux";
// These are bindings connecting our app to firestore with listeners
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import firebase from '../config/firebase';

const rrfConfig = {
    useProfile: 'users',
    attachAuthIsReady: true,
    useFireStoreForProfile: true
}

// the withExtraArgument() function allows us to use more than dispatch and getState 
// Now our enhancer has access to redux thunk with getFirebase and getFirestore
// which means we can access the firebase API with CRUD operations


// the enhancer also takes reactReduxFirebase() & reduxFirestore() functions
// which configures redux to work with the API's using our creds
// this project uses both databases (firestore and firestore)


export const configureStore = () => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
    const composedEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares), 
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase)
    );

    const store = createStore(rootReducer, composedEnhancer);

    return store;
}


// with out multiple middlewares like thunk a simple redux setup would look like this:

// import { devToolsEnhancer } from 'redux-devtools-extension';

// export const configureStore = () => {
//     const store = createStore(rootReducer, devToolsEnhancer());

//     return store;
// }
