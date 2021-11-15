import React from "react";
import { Link } from "react-router-dom";
import { Container, List, Button } from "@mui/material";
import { Header } from "../../Components/Header";
import { navigation } from "../../navigation";

export const Home = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
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
              <Button>
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </List>
      </Container>
    </>
  );
};
