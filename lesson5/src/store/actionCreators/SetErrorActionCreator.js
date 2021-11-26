import { SET_ERROR } from "../TestAPIWithMiddleware/action";

export const SetErrorActionCreator = (isError) => ({
  type: SET_ERROR,
  payload: isError,
});
