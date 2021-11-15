import { Box, Paper } from "@mui/material";

export const Message = (props) => {
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
