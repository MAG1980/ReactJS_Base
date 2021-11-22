import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNyZ6CPIkJVYmylIsrsv6nu3eHjSsC778",
  authDomain: "mymuichat.firebaseapp.com",
  projectId: "mymuichat",
  storageBucket: "mymuichat.appspot.com",
  messagingSenderId: "580598950986",
  appId: "1:580598950986:web:8d2ed36094388fba048ab3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const profileRef = db.ref("profile");
export const chatsListRef = db.ref("chatsList");
export const messagesRef = db.ref("messages");
