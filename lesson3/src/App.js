import logo from './logo.svg';
import './App.css';
import { React, useState, useEffect } from "react";
import Message from "./Message";
import { Layout } from "./Components/Layout";
import { Header } from "./Components/Header"
import { Box } from '@mui/material';

function App() {
	const [ messageList, setMessageList ] = useState( [] );
	const [ messageId, setMessageId ] = useState( 0 );
	useEffect( () => {
		if ( ( messageList.length !== 0 ) && ( messageList[messageList.length - 1].author !== 'Bot' ) ) {
			let message = { id: messageId, author: 'Bot', text: 'Привет от Бота!' };
			setMessageId( messageId + 1 );
			setTimeout( () => {
				let arr = [ ...messageList, message ];
				setMessageList( arr );
			}, 1500 );
			const LastMessage = document.getElementById( "last__message" );
			console.log( LastMessage );
			LastMessage.scrollIntoView( false );

		}
	}, [ messageList ] )


	function addMessage( e ) {
		e.preventDefault();
		let textInput = e.currentTarget.elements['textInput']
		let message = { id: messageId, author: textInput.dataset.userName, text: textInput.value };
		setMessageId( messageId + 1 );
		textInput.value = '';
		let arr = [ ...messageList, message ];
		setMessageList( arr );
	};

	return (
		<>
			<Header></Header>
			<div className="App">
				<Layout>
					<Box sx={{ with: '100%' }}>
						<div className="App-forms">
							<form className="form" onSubmit={( e ) => addMessage( e )}>

								<p className="from__username">Елена:</p>
								<div className="form__wrapper">
									<input className="form__input" type="text" name="textInput" data-user-name="Елена"/>
									<button className="form__button">
										Отправить сообщение
									</button>
								</div>

							</form>
							<form className="form" onSubmit={( e ) => addMessage( e )}>
								<p className="from__username">Николай:</p>
								<div className="form__wrapper">
									<input className="form__input" type="text" name="textInput" data-user-name="Николай"/>
									<button className="form__button">
										Отправить сообщение
									</button>
								</div>

							</form>
							<form className="form" onSubmit={( e ) => addMessage( e )}>
								<p className="from__username">Михаил:</p>
								<div className="form__wrapper">
									<input className="form__input" type="text" name="textInput" data-user-name="Михаил"/>
									<button className="form__button">
										Отправить сообщение
									</button>
								</div>

							</form>
						</div>
					</Box>
					<Box sx={{ with: ' 100%' }}>
						<div className="App-messageList">
							<Message list={messageList}/>
						</div>
					</Box>
				</Layout>

			</div>
		</>

	);
}

export default App;
