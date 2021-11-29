const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

/**
 *
 * @param {string*} entityName - название структуры, которая будет храниться в редьюсере
 * @param {string*} apiUrl - адрес API, откуда приходят данные
 */
export const createApiReducer = (entityName, apiUrl) => {
  const actionTypes = {
    SET_ERROR: `SET_ERROR_${entityName}`,
    SET_LOADING: `SET_LOADING_${entityName}`,
    SET_DATA: `SET_DATA_${entityName}`,
  };
  const actions = {
    setError: (status) => ({
      type: actionTypes.SET_ERROR,
      payload: status,
    }),
    setLoading: (status) => ({
      type: actionTypes.SET_LOADING,
      payload: status,
    }),
    setData: (data) => ({
      type: actionTypes.SET_DATA,
      payload: data,
    }),
  };

  actions.getAPIDataWithThunk = async (dispatch) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.setError(false));
    dispatch(actions.setData([]));

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("fetch (API) error");
      }
      const result = await response.json();
      console.log("result: ", result);
      dispatch(actions.setData(result.data));
    } catch (e) {
      console.log(e);
      dispatch(actions.setError(true));
    }
    dispatch(actions.setLoading(false));
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_LOADING: {
        return { ...state, isLoading: action.payload };
      }

      case actionTypes.SET_ERROR: {
        return { ...state, isError: action.payload };
      }

      case actionTypes.SET_DATA: {
        return { ...state, data: action.payload };
      }

      default: {
        return state;
      }
    }
  };

  const getFromStore = (state) => state[entityName];
  const getAPIData = (state) => getFromStore(state).data;
  const getLoading = (state) => getFromStore(state).isLoading;
  const getError = (state) => getFromStore(state).isError;

  return {
    actions,
    actionTypes,
    reducer,
    selectors: { getFromStore, getAPIData, getLoading, getError },
  };
};
