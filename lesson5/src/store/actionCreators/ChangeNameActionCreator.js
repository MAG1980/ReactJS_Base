import { PROFILE_CHANGE_NAME } from "../profile/action";
export const changeName = (newName) => ({
  type: PROFILE_CHANGE_NAME,
  payload: newName,
});
