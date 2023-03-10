import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyC6MgiksZGqC0QQ7mewnSRfN8jWw9yQxWY",
  authDomain: "note-app-616e9.firebaseapp.com",
  projectId: "note-app-616e9",
  storageBucket: "note-app-616e9.appspot.com",
  messagingSenderId: "1070321299373",
  appId: "1:1070321299373:web:dd011c96d4ee02d36c7b24",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
