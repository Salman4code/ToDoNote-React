//Action Types
export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

//Action Creator
export const addNote = (data) => ({
  type: ADD_NOTE,
  payload: data,
});

export const removeNote = (data) => ({
  type: REMOVE_NOTE,
  payload: data,
});

export const updateNote = (data) => ({
  type: UPDATE_NOTE,
  payload: data,
});
