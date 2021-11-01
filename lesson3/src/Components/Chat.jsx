import { Avatar, ListItem, ListItemAvatar, Typography } from "@mui/material";
export const Chat = (props)=>{
    return(
        <ListItem alignItems="flex-start" sx={{
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
