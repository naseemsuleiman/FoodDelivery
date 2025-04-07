// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Firebase Authentication
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Firestore Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4HozTLzuhATRYl-P-6rSSTnafNTdkEX4",
  authDomain: "food-delivery-app-db5aa.firebaseapp.com",
  projectId: "food-delivery-app-db5aa",
  storageBucket: "food-delivery-app-db5aa.firebasestorage.app",
  messagingSenderId: "344148674980",
  appId: "1:344148674980:web:059a1521894b989b925931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore Database
const db = getFirestore(app);

// Export the initialized services so they can be used in other parts of your app
export { auth, db };
