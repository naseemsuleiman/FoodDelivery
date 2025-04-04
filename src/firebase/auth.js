// Authentication functions
// Developed by Sam

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import { auth, db } from "./firebase";
import { createUserProfile } from "./firestore";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

// User roles
export const USER_ROLES = {
  CUSTOMER: 'customer',
  RESTAURANT_STAFF: 'restaurant_staff',
  DELIVERY_DRIVER: 'delivery_driver',
  RESTAURANT: 'restaurant',
  DELIVERY: 'delivery',
  ADMIN: 'admin'
};

// Email/Password Sign Up
export const signUp = async ({ email, password, name, phone, address, userType }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile
    await updateProfile(user, {
      displayName: name
    });

    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      name,
      phone,
      address,
      userType,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    return userCredential;
  } catch (error) {
    throw error;
  }
};

// Email/Password Login
export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

// Google Sign In
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    // Check if user exists in Firestore
    const userDoc = await getDoc(doc(db, 'users', result.user.uid));
    if (!userDoc.exists()) {
      // Create user document if it doesn't exist
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        email: result.user.email,
        name: result.user.displayName,
        userType: USER_ROLES.CUSTOMER,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
    
    return result;
  } catch (error) {
    throw error;
  }
};

// Twitter Sign In
export const signInWithTwitter = async () => {
  try {
    const provider = new TwitterAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    // Check if user exists in Firestore
    const userDoc = await getDoc(doc(db, 'users', result.user.uid));
    if (!userDoc.exists()) {
      // Create user document if it doesn't exist
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        email: result.user.email,
        name: result.user.displayName,
        userType: USER_ROLES.CUSTOMER,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
    
    return result;
  } catch (error) {
    throw error;
  }
};

// Password Reset
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

// Logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
