//Action Types
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

//Action Creator
export const addUser = (data) => ({
  type: ADD_USER,
  payload: data,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
