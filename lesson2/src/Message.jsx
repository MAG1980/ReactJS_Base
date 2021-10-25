import "./Message.scss"

const Message = (props) => {
		return props.list.map((message) => {
			return (
				<div className="message" key={message.id}>
					<div className="message__item">
						<p>{message.author}</p>
						<p>{message.text}</p>
					</div>
				</div>
			)
		})
	}
;

export default Message;
