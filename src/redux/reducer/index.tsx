import { combineReducers } from "redux";
import AddContactReducer from "../reducer/AddContactReducer";
const rootReducer = combineReducers({
  addContact: AddContactReducer,
});
export default rootReducer;
