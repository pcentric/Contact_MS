import { ADD_CONTACT } from "../constant/actionType";

export function addContact(e) {
  return async (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: e,
    });
  };
}
