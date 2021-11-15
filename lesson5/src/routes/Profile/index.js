import { React, componentDidMount } from "react";
import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../Components/Header";
import { Container } from "@mui/material";
import { ChangeNameActionCreator } from "../../store/actionCreators/ChangeNameActionCreator";
// import { GetNameActionCreator } from "../../store/actionCreators/GetNameActionCreator";
// import { TOGGLE_SHOW_PROFILE } from "../../store/profile/action";
import { ToggleShowProfileActionCreator } from "../../store/actionCreators/ToggleShowProfileActionCreator";
import {
  getProfileName,
  getProfileIsShow,
} from "../../store/profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.profileReducer.isShow);

  const [value, setValue] = useState("");

  // const profileUserName = useSelector((state) => state.profileReducer.name);
  const profileUserName = useSelector(getProfileName);

  // profileUserName = dispatch(GetNameActionCreator()).name; не работает.
  console.log(profileUserName);
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

  const toggleCheckboxShow = useCallback(() => {
    dispatch(ToggleShowProfileActionCreator());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <h1>Profile</h1>
      <input
        type="checkbox"
        checked={isShow}
        value={isShow}
        onChange={toggleCheckboxShow}
        // onChange={() => {
        //   dispatch({
        //     type: TOGGLE_SHOW_PROFILE,
        //   });
        // }}
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
