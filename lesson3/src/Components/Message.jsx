import {Box, Paper} from "@mui/material";


export const Message = (props) => {
		return props.list.map((message) => {
			return (
				<Paper elevation={2} key={message.id} sx={{m:1, width: "95%"}}>
					<Box  sx={{	
						display:'flex',
				justifyContent:'space-around',}}>
						<p className="message__name">{message.author}:</p>
						<p>{message.text}</p>
					</Box>
					<div id="last__message"></div>
				</Paper>
			)
		})
	}
;

