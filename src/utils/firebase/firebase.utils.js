import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh7mlX04z5lUql-BCFa8VIjY3uudSbjLE",
  authDomain: "closing-db-63bb9.firebaseapp.com",
  projectId: "closing-db-63bb9",
  storageBucket: "closing-db-63bb9.appspot.com",
  messagingSenderId: "380412935882",
  appId: "1:380412935882:web:5f56b3710a4f0c9be53e33",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  //if user data does not exist
  //create / set the document with the data from userAuth in collection

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //set the document with this object that contains displayname, email, createdAt
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  //check if user data exist
  //return userDocRef

  return userDocRef;
};
