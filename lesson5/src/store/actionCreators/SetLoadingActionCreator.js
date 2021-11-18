import { SET_LOADING } from "../TestAPIWithMiddleware/action";

export const SetLoadingActionCreator = (status) => ({
  type: SET_LOADING,
  payload: status,
});
