import "./Message.scss"

const Message = (props) => {
		return props.list.map((message) => {
			return (
				<div className="message" key={message.id}>
					<div className="message__item">
						<p className="message__name">{message.author}:</p>
						<p>{message.text}</p>
					</div>
					<div id="last__message"></div>
				</div>
			)
		})
	}
;

export default Message;
