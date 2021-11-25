export const compareById = (targetId) => (item) => item.id === targetId;

export const createMessage = (author, text) => ({
  author,
  text,
});

export const mapMessageSnapshotToMessage = (snapshot) => {
  console.log(snapshot.val());
  return {
    ...snapshot.val(),
    id: snapshot.key,
  }; //{id: snapshot.key, {author: '26lo6J579HPINaffXcaXgEGgBkU2', text: '2'}}
};

export const createChat = (name) => {
  const chat = { name };
  console.log("createChat chat: ", chat);
  return chat;
};

export const mapChatSnapshotToChat = (snapshot) => {
  return { ...snapshot.val(), id: snapshot.key }; // { id: snapshot.key, name: "name"}
};
