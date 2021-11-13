import { PROFILE_CHANGE_NAME } from "../profile/action";
export const ChangeNameActionCreator = (newName) => ({
  type: PROFILE_CHANGE_NAME,
  payload: newName,
});
