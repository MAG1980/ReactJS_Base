export const getTestAPIfromStore = (state) => state.testAPIReducer;
export const getTestAPIData = (state) => getTestAPIfromStore(state).data;
export const getTestAPILoading = (state) =>
  getTestAPIfromStore(state).isLoading;
export const getTestAPIError = (state) => getTestAPIfromStore(state).isError;
