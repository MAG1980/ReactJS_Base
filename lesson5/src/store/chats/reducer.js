import { nanoid } from "nanoid";
import { CHATS_ADD_CHAT, CHATS_REMOVE_CHAT, GET_CHATS_LIST } from "./action";
import { chats } from "../../imit_chats/imit_chats";

const initialChatList = {
  chatList: chats,
};

export const chatsReducer = (state = initialChatList, action) => {
  console.log(state.chatList);
  switch (action.type) {
    case CHATS_ADD_CHAT: {
      return {
        ...state,
        chatList: [...state.chatList, { name: action.name, id: nanoid() }],
      };
    }
    case CHATS_REMOVE_CHAT: {
      return {
        ...state,
        chatList: [
          ...state.chatList.filter((chat) => {
            return chat.id !== action.id;
          }),
        ],
      };
    }
    case GET_CHATS_LIST: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
