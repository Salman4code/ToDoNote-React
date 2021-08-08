//Action Types
export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

//Action Creator
export const addNote = (data) => ({
  type: ADD_NOTE,
  payload: data,
});

export const removeNote = (data) => ({
  type: REMOVE_NOTE,
  payload: data,
});
