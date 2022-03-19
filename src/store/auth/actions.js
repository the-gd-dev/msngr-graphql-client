import {
  DELETE_TOKEN,
  DELETE_USER,
  SAVE_TOKEN,
  SAVE_USER,
} from "./action-types";

/**
 * Save authentication token
 * @param {*} token
 */
export const saveToken = (token) => {
  localStorage.setItem("token", token);
  return {
    type: SAVE_TOKEN,
    token: token,
  };
};

/**
 * Delete authentication token
 * @param {*} token
 */
export const deleteToken = () => {
  localStorage.removeItem("token");
  return {
    type: DELETE_TOKEN,
  };
};

/**
 * Save authenticated user
 * @param {*} token
 */
export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    user: user,
  };
};

/**
 * Delete authenticated user
 * @param {*} token
 */
export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
