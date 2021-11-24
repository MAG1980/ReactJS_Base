// import { nanoid } from "nanoid";
import {
  CHATS_ADD_CHAT,
  CHATS_REMOVE_CHAT,
  GET_CHATS_LIST,
  SET_CHATS,
} from "./action";
import { chats } from "../../imit_chats/imit_chats";

const initialChatList = {
  // chatList: chats, []
  chatList: {},
};

export const chatsReducer = (state = initialChatList, action) => {
  // console.log(state.chatList);
  switch (action.type) {
    case CHATS_ADD_CHAT: {
      // return {
      //   ...state,
      //   chatList: [...state.chatList, { name: action.name, id: nanoid() }]
      // };
      console.log(action);
      return {
        chatList: {
          ...state.chatList,
          [action.payload.id]: {
            name: action.payload.name,
            id: action.payload.id,
          }, // {snapshot1.key:{ id: snapshot1.key, name: "name"},
          //                          ...
          //  snapshot2.key:{ id: snapshot2.key, name: "name"}, }
        },
      };
    }
    case SET_CHATS: {
      return {
        chats: { ...action.payload },
      };
    }
    case CHATS_REMOVE_CHAT: {
      // return {
      //   ...state,
      //   chatList: [
      //     ...state.chatList.filter((chat) => {
      //       return chat.id !== action.id;
      //     })
      //   ]
      // };
      if (!action.id) {
        return state;
      }
      const chatList = { ...state.chatList };
      delete chatList[action.id];
      return {
        chatList,
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
