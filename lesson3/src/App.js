import './App.css';
import { React, useState, useEffect } from "react";
import Message from "./Message";
import { Layout } from "./Components/Layout";
import { Header } from "./Components/Header"
import { Box, Paper, TextField, Divider, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


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
		<Paper evaluation={2}
		       variant="outlined"
		       sx={{
			       boxSizing: 'border-box',
			       p: '20px 10%',
			       height: '100vh',
			       backgroundColor: 'background.main'
		       }}
		>
			<Paper sx={{
				backgroundColor: 'background.second',
				display: 'flex',
				flexDirection: 'column',
				p: 2
			}}>

				<Layout sx={{
					border: ' 1px solid border',
				}}>
					<Header/>
					<Box sx={{
						border: ' 1px solid',
						borderColor: 'border.myBorder',
						width: '100%',
						display: 'grid',
						gridTemplateColumns: '1fr 3fr',
						gridTemplateRows: '70vh',
						overflow: 'hidden'
					}}>
						<Box sx={{
							border: ' 1px solid',
							borderColor: 'border.myBorder',
							backgroundColor: 'background.main',
						}}>
						</Box>

						<Box sx={{
							border: ' 1px solid',
							borderColor: 'border.myBorder',
							backgroundColor: 'background.main',
						}}>
							<Box sx={{
								overflow: 'hidden'
							}}>
								<Message list={messageList}/>
							</Box>
							<Divider/>
							<Box component="form"
							     sx={{
								     display: 'flex',
								     p: '10px'
							     }}
							     onSubmit={( e ) => addMessage( e )}>
								<TextField
									id="filled-basic"
									label="Type Something"
									variant="standard"
									name="textInput" data-user-name="Елена"
									sx={{ width: '100%' }}
								/>
								<Button variant="contained" endIcon={<SendIcon/>}
								        sx={{
									        borderRadius: '50%',
									        p: 3
								        }}>
								</Button>
							</Box>
						</Box>
					</Box>
				</Layout>
			</Paper>
		</Paper>

	)
		;
}

export default App;
