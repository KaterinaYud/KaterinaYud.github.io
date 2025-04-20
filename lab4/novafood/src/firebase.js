import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCYDwGbZB-maCpYY8KipVzbd21cENnQKtA",
  authDomain: "novafood-a34e2.firebaseapp.com",
  projectId: "novafood-a34e2",
  storageBucket: "novafood-a34e2.firebasestorage.app",
  messagingSenderId: "30516710780",
  appId: "1:30516710780:web:a166a958f9cf0ef1d0a8f9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 


