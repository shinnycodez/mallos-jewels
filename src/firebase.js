// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDqBYgXZ-FTUmo8E8xIpNzJK3WMCzRjv1c",
  authDomain: "hiba-3f736.firebaseapp.com",
  projectId: "hiba-3f736",
  storageBucket: "hiba-3f736.firebasestorage.app",
  messagingSenderId: "796604120801",
  appId: "1:796604120801:web:02cd978b74444128c4c1a0",
  measurementId: "G-SR3LPPGYDL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };