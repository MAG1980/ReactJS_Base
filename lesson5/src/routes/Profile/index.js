import React from "react";
import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../Components/Header";
import { Container } from "@mui/material";
import {
  TOGGLE_SHOW_PROFILE,
  // CHANGE_NAME,
  // TOGGLE_SHOW_NAME,
} from "../../store/profile/action";

export const Profile = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.isShow);
  console.log(isShow);
  // const { name } = useSelector((state) => state.profile);
  const [value, setValue] = useState("");

  // const setShowName = useCallback(() => {
  //   dispatch(TOGGLE_SHOW_NAME);
  // }, [dispatch]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const setName = () => {};

  return (
    <Container>
      <Header />
      <h1>Profile</h1>
      <input
        type="checkbox"
        checked={isShow}
        value={isShow}
        onChange={() => {
          dispatch({
            type: TOGGLE_SHOW_PROFILE,
          });
        }}
      />
      <div>
        <h4>Profile</h4>
      </div>
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <div>
        <button onClick={setName}>Change Name</button>
      </div>
    </Container>
  );
};
