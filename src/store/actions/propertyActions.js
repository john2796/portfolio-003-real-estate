import axios from "axios";
export const LOADING = "LOADING";
export const GET_PROPERTY_SUCCESS = "GET_PROPERTY_SUCCESS";
export const GET_ERRORS = "GET_ERRORS";

export const setLoading = () => {
  return {
    type: LOADING
  };
};
