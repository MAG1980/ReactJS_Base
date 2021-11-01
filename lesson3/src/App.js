import "./App.css";

import { Layout } from "./Components/Layout";
import { Chat } from "./Components/Chat";
import { Chats } from "./Components/Chats";
import { Box, Paper } from "@mui/material";
import { Header } from "./Components/Header";

function App() {
  return (
    <Paper
      evaluation={2}
      variant="outlined"
      sx={{
        boxSizing: "border-box",
        p: "20px 10%",
        height: "100vh",
        backgroundColor: "background.main",
      }}
    >
      <Paper
        sx={{
          backgroundColor: "background.second",
          display: "grid",
          gridTemplateAreas: `
          "header header"
          "chats messages"`,
          gridTemplateRows: "30px 85vh",
          gridTemplateColumns: "1fr 3fr",
        }}
      >
        <Header />
        <Box
          sx={{
            gridArea: "chats",
            border: " 1px solid",
            borderColor: "border.myBorder",
            width: "100%",
          }}
        >
          <Paper elevation={1} />
          <Chats>
            <Chat />
          </Chats>
          <Paper />
        </Box>
        <Layout></Layout>
      </Paper>
    </Paper>
  );
}

export default App;
