import { nanoid } from "nanoid";
import { MESSAGES_ADD_MESSAGE } from "./action";

const initialMessagesList = {
  messagesList: {
    chatID: [],
    a: [],
  },
};

export const messagesReducer = (state = initialMessagesList, action) => {
  let arr = [];
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
      // let newMessagesList = {...messagesList, messagesList[key]};

      return {
        ...state,
        messagesList: { ...messagesList, [key]: newArr },
      };
    }

    default: {
      return state;
    }
  }
};
