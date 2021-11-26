import { React } from "react";

import { useSelector } from "react-redux";
import { Header } from "../../Components/Header";
import { Container, Box, Typography } from "@mui/material";

import { getUserName, getUserEmail } from "../../store/user/selectors";

export const Profile = () => {
  const profileUserName = useSelector(getUserName);
  const profileUserEmail = useSelector(getUserEmail);

  return (
    <Container>
      <Header />
      <Typography align="center" component="h1" sx={{ fontSize: "25px", m: 2 }}>
        Profile
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(2, 1fr)",
          gridTemplateColumns: "20% 80%",
          alignItems: "center",
          gridGap: "5px",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}> Name:</Typography>
        <Typography sx={{ fontSize: "30px" }}>{profileUserName}</Typography>
        <Typography sx={{ fontSize: "20px" }}> Email:</Typography>
        <Typography sx={{ fontSize: "30px" }}>{profileUserEmail}</Typography>
      </Box>
    </Container>
  );
};
