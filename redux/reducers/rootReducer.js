import noteReducer from "./noteReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  note: noteReducer,
  user: userReducer,
});

export default rootReducer;
