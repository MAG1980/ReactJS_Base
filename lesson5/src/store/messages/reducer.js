import {
  MESSAGES_ADD_MESSAGE,
  MESSAGES_SET_BOT_TIMER_ID,
  MESSAGES_DELETE_MESSAGES,
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
      let key = action.chatID;
      let messagesList = { ...state.messagesList };
      if (!messagesList.hasOwnProperty(action.chatID)) {
        console.log("Not own props");
        messagesList[key] = [];
      }

      let newArr = [...messagesList[key], action.message];

      return {
        ...state,
        messagesList: { ...messagesList, [key]: newArr },
      };
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
