import { SET_DATA } from "../TestAPIWithMiddleware/action";

export const SetDataActionCreator = (data) => ({
  type: SET_DATA,
  payload: data,
});
