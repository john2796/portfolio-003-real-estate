export const GET_LIST_ID = "GET_LIST_ID ";

export const getSingleListId = id => {
  return {
    type: GET_LIST_ID,
    id
  };
};
