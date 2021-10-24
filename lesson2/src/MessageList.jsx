const MessageList = (props) => {
		return props.list.map((message) => {
			return (
				<div key={message.id}>
					<p>{message.author}</p>
					<p>{message.text}</p>
				</div>
			)
		})
	}
;

export default MessageList;
