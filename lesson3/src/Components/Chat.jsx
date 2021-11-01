import { Avatar, Box, Typography } from "@mui/material";
export const Chat = (props)=>{
    return(
                    <Box  sx={{
                        display:'flex',
                        justifyContent:'space-around',
                        alignItems: 'center'
                    }}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Typography>John Wick</Typography>
              </Box>
    )
}