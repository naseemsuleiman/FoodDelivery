// Firebase configuration and initialization
// Developed by Sam

import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4HozTLzuhATRYl-P-6rSSTnafNTdkEX4",
  authDomain: "food-delivery-app-db5aa.firebaseapp.com",
  projectId: "food-delivery-app-db5aa",
  storageBucket: "food-delivery-app-db5aa.appspot.com",
  messagingSenderId: "344148674980",
  appId: "1:344148674980:web:059a1521894b989b925931",
  websiteUrl: "https://food-delivery-app-db5aa.web.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Twitter provider
export const twitterProvider = new TwitterAuthProvider();

export default app;
