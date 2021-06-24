import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAQYLzWinMcu_iZGSB77EjR6JYTg4QRhzo",
  authDomain: "facebook-messenger-clone-80327.firebaseapp.com",
  projectId: "facebook-messenger-clone-80327",
  storageBucket: "facebook-messenger-clone-80327.appspot.com",
  messagingSenderId: "231626374608",
  appId: "1:231626374608:web:494b94da8a6d5bae2bcdd5",
  measurementId: "G-203PQ0E99C",
});

const db = firebaseApp.firestore();

export default db;
