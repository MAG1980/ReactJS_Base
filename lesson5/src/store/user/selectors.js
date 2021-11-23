export const getUserId = null;

export const getUser = (state) => state.userReducer.user;
export const getIsAuth = (state) => state.userReducer.user !== null;
