import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "../action/noteAction";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, ...[action.payload]];
    case REMOVE_NOTE:
      let removeIndex = state.indexOf(action.payload);
      let updateState = [...state];
      if (removeIndex > -1) {
        updateState.splice(removeIndex, 1);
      }
      return updateState;
    case UPDATE_NOTE:
      return action.payload;
    default:
      return state;
  }
};

export default noteReducer;
