import React from "react";
import "./Message.scss"


const Message = React.forwardRef((props, ref) => {
	return props.list.map((message) => {
		return (
			<div className="message" key={message.id}>
				<div className="message__item">
					<p className="message__name">{message.author}:</p>
					<p>{message.text}</p>
				</div>
				<div ref={ref}></div>
			</div>
		)
	})
});

export default Message;
