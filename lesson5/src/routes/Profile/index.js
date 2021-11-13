import React from "react";
import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../Components/Header";
import { Container } from "@mui/material";
import { ChangeNameActionCreator } from "../../store/actionCreators/ChangeNameActionCreator";
import {
  TOGGLE_SHOW_PROFILE,
  // TOGGLE_SHOW_NAME,
} from "../../store/profile/action";

export const Profile = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.profileReducer.isShow);
  console.log(isShow);
  const profileUserName = useSelector((state) => state.profileReducer.name);
  const [value, setValue] = useState("");

  const setName = useCallback(() => {
    dispatch(ChangeNameActionCreator(value));
    console.log(value);
    setValue("");
  }, [dispatch, value]);

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
      console.log(value);
    },
    [value]
  );

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
        <h4>{profileUserName}</h4>
      </div>
      <div>
        <input value={value} type="text" onChange={handleChange} />
      </div>
      <div>
        <button onClick={setName}>Change Name</button>
      </div>
    </Container>
  );
};
