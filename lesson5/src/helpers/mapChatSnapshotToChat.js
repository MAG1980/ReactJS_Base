export const mapChatSnapshotToChat = (snapshot) => ({
  ...snapshot.val(),
  id: snapshot.key,
});
