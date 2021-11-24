export const getUser = (state) => state.userReducer.user;
export const getUserId = (state) => getUser(state).uid;
export const getIsAuth = (state) => state.userReducer.user !== null;
