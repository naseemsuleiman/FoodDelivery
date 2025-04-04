import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0ADDDu9VxQJR7qINUX8JWJMTL_UO4h04",
  authDomain: "empolyeesystem.firebaseapp.com",
  projectId: "empolyeesystem",
  storageBucket: "empolyeesystem.firebasestorage.app",
  messagingSenderId: "490333178500",
  appId: "1:490333178500:web:0eaf0fc194dbc17c1410d1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const getCurrentUser = () => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    });
  });
};