import { useParams } from "react-router";
import { Box, Paper } from "@mui/material";

export const Message = (props) => {
  console.log(useParams());
  return (
    <Paper elevation={2} sx={{ m: 1, width: "95%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <p className="message__name">{props.message.author}:</p>
        <p>{props.message.text}</p>
      </Box>
      <div id="last__message"></div>
    </Paper>
  );
};
