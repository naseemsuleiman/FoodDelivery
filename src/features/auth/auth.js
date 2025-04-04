// Import Firebase Authentication functions
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, appleProvider, twitterProvider } from "../../firebase/firebase";

// Sign up function (create new user)
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up: ", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up: ", error.message);
    throw error;
  }
};

// Login function (sign in existing user)
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in: ", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in: ", error.message);
    throw error;
  }
};

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out: ", error.message);
  }
};

export const signInWithApple = async () => {
  try {
    const result = await signInWithPopup(auth, appleProvider);
    const user = result.user;
    
    // Check if user exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      // Create new user profile
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName || "Apple User",
        email: user.email,
        phone: user.phoneNumber || "",
        address: "",
        userType: "customer",
        createdAt: new Date().toISOString(),
      });
    }
    
    return user;
  } catch (error) {
    console.error("Error signing in with Apple:", error);
    throw error;
  }
};

export const signInWithTwitter = async () => {
  try {
    const result = await signInWithPopup(auth, twitterProvider);
    const user = result.user;
    
    // Check if user exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      // Create new user profile
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName || "Twitter User",
        email: user.email,
        phone: user.phoneNumber || "",
        address: "",
        userType: "customer",
        createdAt: new Date().toISOString(),
      });
    }
    
    return user;
  } catch (error) {
    console.error("Error signing in with Twitter:", error);
    throw error;
  }
};
