import {
  MESSAGES_ADD_MESSAGE,
  MESSAGES_SET_BOT_TIMER_ID,
  MESSAGES_DELETE_MESSAGES,
  REMOVE_MESSAGES_BY_CHAT_ID,
} from "./action";

const initialMessagesList = {
  messagesList: {
    chatID: [],
  },
  botTimerID: null,
};

export const messagesReducer = (state = initialMessagesList, action) => {
  switch (action.type) {
    case MESSAGES_ADD_MESSAGE: {
      //action.payload = {
      // chatId,
      // {id: snapshot.key, { author: "26lo6J579HPINaffXcaXgEGgBkU2", text: "2" }
      // };
      const { message, chatId } = action.payload;

      const newMessagesList = { ...state.messagesList };
      newMessagesList[chatId] = {
        ...(newMessagesList[chatId] || {}),
        [message.id]: message,
      };
      return {
        messagesList: newMessagesList,
      };

      // let key = action.chatID;
      // let messagesList = { ...state.messagesList };
      // if (!messagesList.hasOwnProperty(action.chatID)) {
      //   console.log("Not own props");
      //   messagesList[key] = [];
      // }

      // let newArr = [...messagesList[key], action.message];

      // return {
      //   ...state,
      //   messagesList: { ...messagesList, [key]: newArr },
      // };
    }

    case REMOVE_MESSAGES_BY_CHAT_ID: {
      console.log(action.payload);
      if (!state.messagesList.hasOwnProperty(action.payload)) {
        return state;
      }
      const newMessagesList = { ...state.messagesList };
      delete newMessagesList[action.payload];
      return { messagesList: newMessagesList };
    }

    case MESSAGES_SET_BOT_TIMER_ID: {
      return { ...state, botTimerID: action.timerID };
    }

    case MESSAGES_DELETE_MESSAGES: {
      let messagesList = { ...state.messagesList };
      delete messagesList[action.chatID];
      return { ...state, messagesList };
    }

    default: {
      return state;
    }
  }
};
