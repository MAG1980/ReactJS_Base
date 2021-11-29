import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNyZ6CPIkJVYmylIsrsv6nu3eHjSsC778",
  authDomain: "mymuichat.firebaseapp.com",
  databaseURL:
    "https://mymuichat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mymuichat",
  storageBucket: "mymuichat.appspot.com",
  messagingSenderId: "580598950986",
  appId: "1:580598950986:web:8b17fdd0bbee7c43048ab3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const FirebaseLogin = auth.signInWithEmailAndPassword;

export const profileRef = db.ref("profile");
export const chatsListRef = db.ref("chatsList");
export const messagesRef = db.ref("messages");
export const testRef = db.ref("test");
