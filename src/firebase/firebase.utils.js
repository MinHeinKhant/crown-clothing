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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const { displayName, email, uid } = userAuth;
  // console.log(userAuth);

  if (!userAuth) return;
  const userRef = firestore.doc(`users/${uid}`);
  // const userRefCol = firestore.collection(`users/`);
  // console.log(userRef);
  // console.log(userRefCol);

  const snapShot = await userRef.get();
  // const snapShotCol = await userRefCol.get();
  // console.log(snapShot);
  // console.log(snapShotCol);
  if (!snapShot.exists) {
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData
      });
    } catch (error) {
      console.log("error occurred", error.message);
    }
  }
  // console.log((await userRef.get()).data());

  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
