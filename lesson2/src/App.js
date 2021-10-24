import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import MessageList from "./MessageList";

function App() {
	let messages = [
		{author: "Николай", text: "Привет! Как дела?"},
		{author: "Наталья", text: "Привет! Всё ОК."},
		{author: "Сергей", text: "Hi! Какие планы на выходные?"}
	];
	const [messageList, setMessageList] = useState([]);

	// console.log(messageList);
	// let message = {author: "Елена", text: "Привет! Будем изучать React?"};
	// let arr = [...messageList, message];
	// console.log(arr);
	// setMessageList(arr);
	// // setMessageList(arr);
	// console.log(messageList);

	function addMessage(e) {
		e.preventDefault();
		// let textInput = e.currentTarget.elements['textInput']
		// console.log(textInput.value);
		// messages.push({text: textInput.value});
		// textInput.value = '';
		console.log(messageList);
		let message = {author: "Елена", text: "Привет! Будем изучать React?"};
		let arr = [...messageList, message];
		console.log(arr);
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

			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			{/* <MessageList list={messageList} /> */}
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
