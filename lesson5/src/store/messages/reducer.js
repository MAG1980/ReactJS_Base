import { nanoid } from "nanoid";
import { MESSAGES_ADD_MESSAGE } from "./action";

const initialMessagesList = {
  messagesList: {
    chatID: [],
  },
};

export const messagesReducer = (state = initialMessagesList, action) => {
  switch (action.type) {
    case MESSAGES_ADD_MESSAGE: {
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [action.chatID]: action.listMessages,
        },
      };
    }

    default: {
      return state;
    }
  }
};
