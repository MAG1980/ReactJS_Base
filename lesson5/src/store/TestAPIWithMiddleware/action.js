import { TEST_API_URL } from "../../helpers/API";

export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const SET_DATA = "SET_DATA";

export const SetErrorActionCreator = (isError) => ({
  type: SET_ERROR,
  payload: isError,
});

export const SetLoadingActionCreator = (status) => ({
  type: SET_LOADING,
  payload: status,
});

export const SetDataActionCreator = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const getAPIDataActionCreator = async (dispatch) => {
  dispatch(SetLoadingActionCreator(true));
  dispatch(SetErrorActionCreator(false));
  dispatch(SetDataActionCreator([]));

  try {
    const response = await fetch(TEST_API_URL);
    if (!response.ok) {
      throw new Error("fetch (API) error");
    }
    const result = await response.json();
    console.log("result: ", result);
    dispatch(SetDataActionCreator(result.data));
  } catch (e) {
    console.log(e);
    dispatch(SetErrorActionCreator(true));
  }
  dispatch(SetLoadingActionCreator(false));
};
