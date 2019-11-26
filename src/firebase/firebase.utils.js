import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDX8UkQrLfabV1QezNo3eNm6Q5-MGXGl2c",
  authDomain: "crwn-db-a888b.firebaseapp.com",
  databaseURL: "https://crwn-db-a888b.firebaseio.com",
  projectId: "crwn-db-a888b",
  storageBucket: "crwn-db-a888b.appspot.com",
  messagingSenderId: "529779985902",
  appId: "1:529779985902:web:97f0cce77eacf337a612ff",
  measurementId: "G-G7VJS3Q67E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
