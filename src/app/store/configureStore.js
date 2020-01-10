import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const configureStore = () => {
    const middlewares = [thunk];
    const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, composedEnhancer);

    return store;
}


// with out multiple middlewares like thunk a simple redux setup would look like this:

// import { devToolsEnhancer } from 'redux-devtools-extension';

// export const configureStore = () => {
//     const store = createStore(rootReducer, devToolsEnhancer());

//     return store;
// }
