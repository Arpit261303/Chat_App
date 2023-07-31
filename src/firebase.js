import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOFmpI8ynKHOV44CoNkIUXUgddvZCYdow",
  authDomain: "chatting-41144.firebaseapp.com",
  projectId: "chatting-41144",
  storageBucket: "chatting-41144.appspot.com",
  messagingSenderId: "77008359375",
  appId: "1:77008359375:web:9b2a5a721f5a4fa499ccba",
  measurementId: "G-7558Q7S51R"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
