import {createStore, combineReducers, applyMiddleware} from "redux";
import dialect from "./modules/Dialect";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({dialect})
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer)

export default store;