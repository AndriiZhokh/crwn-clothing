import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwGNm1douVJd6eMTMNw-ydnqFFRo7mfRg",
  authDomain: "crwn-clothing-db-17454.firebaseapp.com",
  projectId: "crwn-clothing-db-17454",
  storageBucket: "crwn-clothing-db-17454.appspot.com",
  messagingSenderId: "602111908577",
  appId: "1:602111908577:web:fd5b8036f30c89950675a0"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
