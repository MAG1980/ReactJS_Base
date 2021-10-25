import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect} from "react";
import Message from "./Message";

function App() {
	// let messages = [
	// 	{author: "Николай", text: "Привет! Как дела?"},
	// 	{author: "Наталья", text: "Привет! Всё ОК."},
	// 	{author: "Сергей", text: "Hi! Какие планы на выходные?"}
	// ];
	const [messageList, setMessageList] = useState([]);
	const [messageId, setMessageId] = useState(0);
	const myRef = React.createRef();
	useEffect(() => {
		if ((messageList.length !== 0) && (messageList[messageList.length - 1].author !== 'Bot')) {
			let message = {id: messageId, author: 'Bot', text: 'Привет от Бота!'};
			setMessageId(messageId + 1);
			setTimeout(() => {
				let arr = [...messageList, message];
				setMessageList(arr);
			}, 1500);
			// if () {
			// 	.current.scrollIntoView(
			// 		{
			// 			behavior: 'smooth',
			// 			block: 'end',
			// 			inline: 'nearest'
			// 		})
			// }
		}
	}, [messageList])


	function addMessage(e) {
		e.preventDefault();
		let textInput = e.currentTarget.elements['textInput']
		let message = {id: messageId, author: textInput.dataset.userName, text: textInput.value};
		setMessageId(messageId + 1);
		textInput.value = '';
		let arr = [...messageList, message];
		setMessageList(arr);
	};

	return (
		<div className="App">
			<div className="App-messageList">
				<Message ref={myRef} list={messageList}/>
			</div>

			<div className="App-forms">
				<form onSubmit={(e) => addMessage(e)}>
					<input type="text" name="textInput" data-user-name="Елена"/>
					<button className="form__button">
						Отправить сообщение
					</button>
				</form>
			</div>

		</div>
	);
}

export default App;
