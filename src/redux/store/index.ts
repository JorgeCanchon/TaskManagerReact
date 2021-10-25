import { combineReducers } from "redux";
import taskReducer from "./reducer";

export const reducer = combineReducers({
    tasks: taskReducer
});

export default reducer;