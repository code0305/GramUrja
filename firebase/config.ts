import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "gramurja-ea1db.firebaseapp.com",
  projectId: "gramurja-ea1db",
  storageBucket: "gramurja-ea1db.appspot.com",
  messagingSenderId: "1031971640639",
  appId: "process.env.appId"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
