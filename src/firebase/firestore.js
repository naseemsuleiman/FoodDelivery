// Import Firestore functions
import { db } from "./firebase";
import { doc, setDoc, getDoc, collection, addDoc, updateDoc, getDocs } from "firebase/firestore";

// Function to add a new order to Firestore
export const addOrderToFirestore = async (userId, orderData) => {
  try {
    const orderRef = await addDoc(collection(db, "orders"), {
      userId: userId,
      ...orderData,
      timestamp: new Date().toISOString(),
    });
    console.log("Order added: ", orderRef.id);
    return orderRef.id;
  } catch (error) {
    console.error("Error adding order: ", error.message);
    throw error;
  }
};

// Function to get orders by user
export const getOrdersByUser = async (userId) => {
  try {
    const ordersQuery = collection(db, "orders");
    const ordersSnapshot = await getDocs(ordersQuery);
    const ordersList = ordersSnapshot.docs.map(doc => doc.data());
    return ordersList;
  } catch (error) {
    console.error("Error fetching orders: ", error.message);
    throw error;
  }
};

// Function to store cart items for the user
export const saveCartToFirestore = async (userId, cartData) => {
  try {
    const cartRef = doc(db, "users", userId);
    await setDoc(cartRef, { cart: cartData });
    console.log("Cart saved for user: ", userId);
  } catch (error) {
    console.error("Error saving cart: ", error.message);
    throw error;
  }
};

// Firestore functions for user profile management
// Developed by Sam

// Create user profile in Firestore
export const createUserProfile = async (userId, userData) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, userData);
    return userData;
  } catch (error) {
    throw error;
  }
};

// Get user profile from Firestore
export const getUserProfile = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      throw new Error("User profile not found");
    }
  } catch (error) {
    throw error;
  }
};

// Update user profile in Firestore
export const updateUserProfile = async (userId, userData) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, userData);
    return userData;
  } catch (error) {
    throw error;
  }
};

// Get all users (for admin purposes)
export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const usersSnap = await getDocs(usersRef);
    return usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};
