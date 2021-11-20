import { SET_ERROR, SET_LOADING, SET_DATA } from "./action";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const testAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case SET_ERROR: {
      return { ...state, isError: action.payload };
    }

    case SET_DATA: {
      return { ...state, data: action.payload };
    }

    default:
      return state;
  }
};
