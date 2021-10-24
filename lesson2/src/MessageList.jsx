const MessageList = (list) => {
	console.log(list);
	return list.map((message) => {
		<div>
			console.log(message)
			<p>{message.author}</p>
			<p>{message.text}</p>
		</div>;
	});
};

export default MessageList;
