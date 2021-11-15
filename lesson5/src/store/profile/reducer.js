import {
  TOGGLE_SHOW_PROFILE,
  PROFILE_CHANGE_NAME,
  GET_PROFILE_NAME,
} from "./action";

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

    case PROFILE_CHANGE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
