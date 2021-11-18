import { MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGES } from "./action";

const initialMessagesList = {
  messagesList: {
    chatID: [],
    a: [],
  },
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
      console.log(action.message);

      console.log(key);

      let newArr = [...messagesList[key], action.message];
      console.log(messagesList);

      return {
        ...state,
        messagesList: { ...messagesList, [key]: newArr },
      };
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
