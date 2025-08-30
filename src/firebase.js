// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBQ61oAMedNx9hNjf86JRsse25YxVAcxgc",
  authDomain: "malo-cf0ce.firebaseapp.com",
  projectId: "malo-cf0ce",
  storageBucket: "malo-cf0ce.firebasestorage.app",
  messagingSenderId: "737742966195",
  appId: "1:737742966195:web:eaddfa1974320b5ca74fc6",
  measurementId: "G-89KVY7955H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };