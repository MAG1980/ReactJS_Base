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

export const Chat = ({ name, removeChat }) => {
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
          <Avatar alt={name} src="../../public/img/1.jpg" />
        </ListItemAvatar>
        <Typography>{name}</Typography>
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
