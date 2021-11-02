import React from "react";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
const navigation = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/chat_list",
    title: "ChatList",
  },
];

export const Home = ({ children }) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {navigation.map((item) => {
        return (
          <List component={Link} href={item.path}>
            {item.title}
          </List>
        );
      })}
    </List>
  );
};
