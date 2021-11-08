import { nanoid } from "nanoid";
import { ADD_CHAT } from "./action";

const initialChatList = {
  chatList: [{ name: "", id: "" }],
};

export const chatsReducer = (state = initialChatList, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        chatList: [...state.chatList, { name: "newName", id: nanoid() }],
      };
    }
    default: {
      return state;
    }
  }
};
