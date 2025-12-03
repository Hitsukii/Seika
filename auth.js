import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "seika-ba8ac.firebaseapp.com",
  projectId: "seika-ba8ac",
  storageBucket: "seika-ba8ac.firebasestorage.app",
  messagingSenderId: "554814845878",
  appId: "1:554814845878:web:75f4ba517042cf0b680717"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export function register(e,p){return createUserWithEmailAndPassword(auth,e,p)}
export function login(e,p){return signInWithEmailAndPassword(auth,e,p)}
export function resetPassword(e){return sendPasswordResetEmail(auth,e)}
export function logout(){return signOut(auth)}
export function onUserStateChanged(cb){return onAuthStateChanged(auth,cb)}
