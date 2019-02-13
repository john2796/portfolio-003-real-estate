import { LOADING, GET_PROPERTY_SUCCESS } from "../actions/propertyActions";
import { propertydata } from "../../propertiesdata";
const initialState = {
  data: propertydata,
  loading: false
};
export default function propertyReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
