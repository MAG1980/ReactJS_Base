import {Box} from "@mui/material";

export const Message = (props) => {
		return props.list.map((message) => {
			return (
				<Box key={message.id} sx={{width: "100%"}}>
					<Box  sx={{				display:'flex',
				justifyContent:'space-around'}}>
						<p className="message__name">{message.author}:</p>
						<p>{message.text}</p>
					</Box>
					<div id="last__message"></div>
				</Box>
			)
		})
	}
;

