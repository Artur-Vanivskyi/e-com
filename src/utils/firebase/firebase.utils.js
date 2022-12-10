import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);