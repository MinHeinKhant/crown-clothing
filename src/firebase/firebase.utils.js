import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyRs9VLXFkPcoKlgmop7QKD9afFLxEKHU",
  authDomain: "crown-clothing-7ff7e.firebaseapp.com",
  databaseURL: "https://crown-clothing-7ff7e.firebaseio.com",
  projectId: "crown-clothing-7ff7e",
  storageBucket: "crown-clothing-7ff7e.appspot.com",
  messagingSenderId: "908186023128",
  appId: "1:908186023128:web:068fa784d4903f80d413ad",
  measurementId: "G-CJYV16YBLV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
