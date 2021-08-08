import { ADD_USER, REMOVE_USER } from "../action/loginAction";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...action.payload };
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
