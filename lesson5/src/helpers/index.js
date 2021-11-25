export const compareById = (targetId) => (item) => item.id === targetId;

export const createMessage = (author, text) => ({
  author,
  text,
});

export const mapMessageSnapshotToMessage = (snapshot) => ({
  ...snapshot.val(),
  id: snapshot.key,
});

export const createChat = (name) => {
  const chat = { name };
  console.log("createChat chat: ", chat);
  return chat;
};

export const mapChatSnapshotToChat = (snapshot) => {
  return { ...snapshot.val(), id: snapshot.key }; // { id: snapshot.key, name: "name"}
};
