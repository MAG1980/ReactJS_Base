import { Redirect } from "react-router-dom";
import { auth } from "../services/firebase";

export const LogOut = () => {
  auth.signOut();
  return <Redirect to="/login" />;
};
