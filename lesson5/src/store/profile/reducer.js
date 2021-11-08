import { TOGGLE_SHOW_PROFILE, TOGGLE_SHOW_NAME } from "./action";

const initialValues = {
  isShow: false,
  name: "Default",
};

export const profileReducer = (state = initialValues, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_PROFILE: {
      return {
        ...state,
        isShow: !state.isShow,
      };
    }
    case TOGGLE_SHOW_NAME:
      return {
        ...state,
        showName: !state.showName,
      };
    default: {
      return state;
    }
  }
};
