import propTypes from "prop-types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { RemoveChatActionCreator } from "../../../../store/actionCreators/RemoveChatActionCreator";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  List,
  Avatar,
  ListItem,
  ListItemAvatar,
  Typography,
  Button,
} from "@mui/material";

export const Chat = (props) => {
  const chatID = props.id;
  // console.log("chatID: ", chatID);

  const dispatch = useDispatch();
  const removeChat = useCallback(
    (e) => {
      console.log("chatID: ", chatID);
      dispatch(RemoveChatActionCreator(chatID));
    },
    [chatID]
  );
  return (
    <>
      <ListItem
        component={List}
        alignItems="flex-start"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <ListItemAvatar>
          <Avatar alt={props.name} src="../../public/img/1.jpg" />
        </ListItemAvatar>
        <Typography>{props.name}</Typography>
        <Button>
          <CloseRoundedIcon type="button" onClick={removeChat} />
        </Button>
      </ListItem>
    </>
  );
};

Chat.propTypes = {
  name: propTypes.string,
};
