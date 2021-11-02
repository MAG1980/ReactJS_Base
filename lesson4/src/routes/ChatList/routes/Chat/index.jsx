import { Layout } from "../../../../Components/Layout";
import { Chats } from "../../../../Components/Chats";
import { Paper } from "@mui/material";
import { Header } from "../../../../Components/Header";
import { Search } from "../../../../Components/Search";

export const Chat = () => {
  return (
    <>
      <Paper
        evaluation={2}
        variant="outlined"
        sx={{
          boxSizing: "border-box",
          p: "20px 10%",
          height: "100vh",
          bgcolor: "background.main",
        }}
      >
        <Paper
          sx={{
            bgcolor: "background.second",
            display: "grid",
            gridTemplateAreas: `
              "header header"
              "chats messages"`,
            gridTemplateRows: "30px 85vh",
            gridTemplateColumns: "1fr 3fr",
            p: 2,
          }}
        >
          <Header />
          <Chats>
            <Search />
          </Chats>
          <Layout />
        </Paper>
      </Paper>
    </>
  );
};
