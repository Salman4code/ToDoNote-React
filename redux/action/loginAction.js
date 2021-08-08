//Action Types
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

//Action Creator
export const addUser = (data) => ({
  type: ADD_USER,
  payload: data,
});

export const removeNote = (data) => ({
  type: REMOVE_USER,
  payload: data,
});
