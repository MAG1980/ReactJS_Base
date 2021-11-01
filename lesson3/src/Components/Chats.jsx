import {Box} from '@mui/material'
export const Chats = ( {children}) =>{
    return <Box sx={{
        display:'flex',
        flexDirection:'column',
        border: " 1px solid",
        borderColor: "border.myBorder",
        backgroundColor: "background.main",
        pt:1,
        pb:1,
    }}>{children}</Box>
}