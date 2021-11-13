export const getRootProfile = (state) => {
  return state.profileReducer;
};

export const getProfileName = (state) => {
  return getRootProfile(state).name;
};

export const getProfileIsShow = (state) => {
  return getRootProfile(state).isShow;
};
