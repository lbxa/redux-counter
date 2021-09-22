import { combineReducers } from "redux";
import counterReducer from "./counter";
import loginReducer from "./login";

export default combineReducers({
    counter: counterReducer,
    login: loginReducer,
});
