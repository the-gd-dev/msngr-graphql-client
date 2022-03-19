import { createStore, combineReducers } from "redux";
import authReducer from "./auth/reducers";
const rootReducer = combineReducers({
  auth: authReducer,
});
export default createStore(rootReducer);
