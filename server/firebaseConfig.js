const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDA9vCDji0sYteNJOIMV81DyGHuaorN5hQ",
  authDomain: "fern-46a78.firebaseapp.com",
  projectId: "fern-46a78",
  storageBucket: "fern-46a78.appspot.com",
  messagingSenderId: "768371104160",
  appId: "1:768371104160:web:5c888e64ac35cfc37eecc5",
  measurementId: "G-RCJ1MWMLT9",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");

module.exports = User;
