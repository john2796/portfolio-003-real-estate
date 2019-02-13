import { combineReducers } from "redux";
import listing from "./listingReducer";
import propertyReducer from "./propertyReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
  listing,
  propertyReducer,
  errors: errorReducer
});
