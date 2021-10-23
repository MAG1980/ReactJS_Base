import './Message.scss'

const Message = (props) => {
	return (
		<div className="message">
			<img className="message__img" src={props.path} alt="фото"/>
			<p className="message__content">{props.content}</p>
			<button
				className="message__button"
				onClick={() => {
					const messageContent = document.querySelector('.message__content')
					const textButton = document.querySelector('.message__button')
					if (messageContent.classList.contains('message__content_hide')) {
						textButton.innerText = "Скрыть тест сообщения"
						messageContent.classList.remove("message__content_hide")
					} else {
						textButton.innerText = "Показать тест сообщения"
						messageContent.classList.add("message__content_hide")
					}
				}}>{props.textButton}</button>
		</div>
	)
}
export default Message