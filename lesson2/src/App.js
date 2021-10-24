import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import MessageList from "./MessageList";

function App() {
	// let messages = [
	// 	{author: "Николай", text: "Привет! Как дела?"},
	// 	{author: "Наталья", text: "Привет! Всё ОК."},
	// 	{author: "Сергей", text: "Hi! Какие планы на выходные?"}
	// ];
	const [messageList, setMessageList] = useState([]);
	const [messageId, setMessageId] = useState(0);

	function addMessage(e) {
		e.preventDefault();
		let textInput = e.currentTarget.elements['textInput']
		let message = {id: messageId, author: "Елена", text: textInput.value};
		setMessageId(messageId + 1);
		textInput.value = '';
		let arr = [...messageList, message];
		setMessageList(arr);
		console.log(messageList);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>

			<MessageList list={messageList}/>
			<form onSubmit={(e) => addMessage(e)}>
				<input type="text" name="textInput"/>
				<button>
					Отправить сообщение
				</button>
			</form>
		</div>
	);
}

export default App;
