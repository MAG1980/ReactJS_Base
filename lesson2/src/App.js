import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";
import Message from "./Message";

function App() {
	// let messages = [
	// 	{author: "Николай", text: "Привет! Как дела?"},
	// 	{author: "Наталья", text: "Привет! Всё ОК."},
	// 	{author: "Сергей", text: "Hi! Какие планы на выходные?"}
	// ];
	const [messageList, setMessageList] = useState([]);
	const [messageId, setMessageId] = useState(0);

	useEffect(() => {
		if ((messageList.length !== 0) && (messageList[messageList.length - 1].author !== 'Bot')) {
			let message = {id: messageId, author: 'Bot', text: 'Привет от Бота!'};
			setMessageId(messageId + 1);
			setTimeout(() => {
				let arr = [...messageList, message];
				setMessageList(arr);
			}, 1500);

			console.log(messageList);
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
		console.log(messageList);
	};

	return (
		<div className="App">
			{/*<header className="App-header">*/}
			{/*	<img src={logo} className="App-logo" alt="logo"/>*/}
			{/*	<p>*/}
			{/*		Edit <code>src/App.js</code> and save to reload.*/}
			{/*	</p>*/}
			{/*	<a*/}
			{/*		className="App-link"*/}
			{/*		href="https://reactjs.org"*/}
			{/*		target="_blank"*/}
			{/*		rel="noopener noreferrer"*/}
			{/*	>*/}
			{/*		Learn React*/}
			{/*	</a>*/}
			{/*</header>*/}
			<div className="App-messageList">
				<Message list={messageList}/>
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
