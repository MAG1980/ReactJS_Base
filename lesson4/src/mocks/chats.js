import { nanoid } from "nanoid";

const createChatMock = (i) => ({
  id: nanoid(),
  name: "name ${i}",
});

export const CHATS = Array.from({ length: 10 }).map((_, i) =>
  createChatMock(i)
);
