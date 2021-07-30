import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // here is a logic to log in the users

    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
  } catch (err) {
    // here is the logic for user's sign up process

    history.push("/");
    console.log(err);
  }
};
