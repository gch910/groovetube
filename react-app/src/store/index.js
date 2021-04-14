import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import followsReducer from "./follows";
import profileReducer from "./profile";
import sessionReducer from "./session";
import videosReducer from "./videos";

const rootReducer = combineReducers({
    videos: videosReducer,
    session: sessionReducer,
    follows: followsReducer,
    profile: profileReducer,
});

let enhancer;

if(process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers = 
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));

 };

    const configureStore = (preloadedState) => {
        return createStore(rootReducer, preloadedState, enhancer);

}

export default configureStore;
