import propTypes from "prop-types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
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
  console.log("chatID: ", chatID);
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
          <CloseRoundedIcon />
        </Button>
      </ListItem>
    </>
  );
};

Chat.propTypes = {
  name: propTypes.string,
};
