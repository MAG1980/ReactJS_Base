import IconButton from "@mui/material/IconButton";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { useCallback, useState, React } from "react";
import { useDispatch } from "react-redux";
import { addChatActionCreator } from "../store/actionCreators/AddChatActionCreator";

import { Box, TextField, Button, Modal } from "@mui/material/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AddChatModal = () => {
  const [inputValue, setInputValue] = useState("");
  const changeStateValue = (e) => {
    setInputValue(e.target.value);
  };

  const dispatch = useDispatch();

  const addChat = useCallback(() => {
    handleClose();
    dispatch(addChatActionCreator(inputValue), [dispatch]);
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <AddReactionIcon />
        Add Chat
      </IconButton>
      <Modal
        component="form"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            onChange={changeStateValue}
            id="outlined-basic"
            label="NewUser Name"
            variant="outlined"
            required
          />
          <Button onClick={addChat}>
            <AddCircleOutlineSharpIcon fontSize="large" />
          </Button>
        </Box>
      </Modal>
    </>
  );
};
