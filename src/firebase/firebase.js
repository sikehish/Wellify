import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAWaJtxlPgeSNNgqTxggi68VZgANhHDtA",
  authDomain: "codefury6.firebaseapp.com",
  projectId: "codefury6",
  storageBucket: "codefury6.appspot.com",
  messagingSenderId: "33403590710",
  appId: "1:33403590710:web:f0513ee9157d77d6d5e097",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error.message);
  }
};

export {
  auth,
  signInWithGoogle,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
};
