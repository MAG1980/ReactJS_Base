import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../Components/Header";
import { Container } from "@mui/material";
import { TOGGLE_SHOW_PROFILE } from "../../store/profile/action";

export const Profile = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.isShow);
  return (
    <Container>
      <Header />
      <h1>Profile</h1>
      <input
        type="checkbox"
        checked={isShow}
        onChange={() => {
          dispatch({
            type: TOGGLE_SHOW_PROFILE,
          });
        }}
      />
    </Container>
  );
};
