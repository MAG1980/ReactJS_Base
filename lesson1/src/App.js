import logo from './logo.svg';
import './App.css';
import Message from "./Message";

const messageContent = "Это текст сообщения"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<Message
					path='https://3dnews.ru/assets/external/illustrations/2019/11/11/997378/intro.jpg'
					content={messageContent}
					textButton="Скрыть тест сообщения"
				/>
			</header>
		</div>
	);
}

export default App;
