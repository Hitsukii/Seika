import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export function register(e,p){return createUserWithEmailAndPassword(auth,e,p)}
export function login(e,p){return signInWithEmailAndPassword(auth,e,p)}
export function resetPassword(e){return sendPasswordResetEmail(auth,e)}
export function logout(){return signOut(auth)}
export function onUserStateChanged(cb){return onAuthStateChanged(auth,cb)}
