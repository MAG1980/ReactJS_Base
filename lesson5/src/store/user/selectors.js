export const getUser = (state) => state.userReducer.user;
export const getUserId = (state) => getUser(state).uid;
export const getUserName = (state) => getUser(state).displayName;
export const getUserEmail = (state) => getUser(state).email;
export const getIsAuth = (state) => state.userReducer.user !== null;
