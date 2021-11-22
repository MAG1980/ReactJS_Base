import IconButton from "@mui/material/IconButton";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

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

export const AddChatModal = ({
  open,
  handleOpen,
  handleClose,
  addChat,
  changeStateValue,
}) => {
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
            autoFocus
            onChange={changeStateValue}
            id="outlined-basic"
            label="NewUser Name"
            variant="outlined"
            required
            sx={{ width: "80%" }}
          />
          <Button onClick={addChat}>
            <AddCircleOutlineSharpIcon fontSize="large" />
          </Button>
        </Box>
      </Modal>
    </>
  );
};
