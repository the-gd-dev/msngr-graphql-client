import {
  DELETE_TOKEN,
  DELETE_USER,
  SAVE_TOKEN,
  SAVE_USER,
} from "./action-types";

const token = localStorage.getItem("token");
const initialState = {
  user: null,
  token: token || null,
};

/**
 * Auth reducer
 * @param {*} state
 * @param {*} payload
 * @returns
 */
const authReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case SAVE_TOKEN:
      return { ...state, token: payload.token };
    case DELETE_TOKEN:
      return { ...state, token: null, user: null };
    case SAVE_USER:
      return { ...state, user: payload.user };
    case DELETE_USER:
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};
export default authReducer;
