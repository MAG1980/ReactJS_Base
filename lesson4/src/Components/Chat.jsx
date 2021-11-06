import  propTypes from "prop-types";
import { Link, Avatar, ListItem, ListItemAvatar, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
export const Chat = (props)=>{
    return(
        <ListItem  component={Link} href={`/chat_list/${props.id}`}
        alignItems="flex-start" sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems: 'center',
            p: 2
        }}>
        <ListItemAvatar>
         <Avatar alt={props.name} src="../../public/img/1.jpg" />   
        </ListItemAvatar>
        <Typography>{props.name}</Typography>
      </ListItem>
    )
}

Chat.propTypes = {
    name: propTypes.string,
}