import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MessageInput = ({ inputRef, addMessage, input, changeInput }) => {
  return (
    <Box
      onSubmit={addMessage}
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1,
        bgcolor: "background.main",
      }}
    >
      <TextField
        inputRef={inputRef}
        value={input}
        onChange={changeInput}
        id="filled-basic"
        label="Type Something"
        variant="standard"
        name="textInput"
        sx={{ width: "100%", autoComplete: "off" }}
      />
      <Button
        size="small"
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
        sx={{
          minWidth: 30,
          minHeight: 30,
          borderRadius: "50%",
        }}
      ></Button>
    </Box>
  );
};
