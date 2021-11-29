import { SetDataActionCreator } from "../actionCreators/SetDataActionCreator";
import { SetLoadingActionCreator } from "../actionCreators/SetLoadingActionCreator";
import { SetErrorActionCreator } from "../actionCreators/SetErrorActionCreator";
import { TEST_API_URL } from "../../helpers/API";

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
