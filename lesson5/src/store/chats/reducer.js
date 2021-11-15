import { nanoid } from "nanoid";
import { ADD_CHAT, GET_CHATS_LIST } from "./action";
import { chats } from "../../imit_chats/imit_chats";

const initialChatList = {
  chatList: chats,
};

export const chatsReducer = (state = initialChatList, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        chatList: [...state.chatList, { name: "newName", id: nanoid() }],
      };
    }
    case GET_CHATS_LIST: {
      return state.chatList;
    }
    default: {
      return state;
    }
  }
};
