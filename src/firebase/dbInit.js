// Database initialization and structure setup
// Developed by Sam

import { db } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";

// Initialize database structure
export const initializeDatabase = async () => {
  try {
    // Create collections if they don't exist
    const collections = ['users', 'restaurants', 'menuItems', 'orders', 'cart'];
    
    for (const collectionName of collections) {
      // Create a dummy document to ensure the collection exists
      const dummyDoc = doc(collection(db, collectionName));
      await setDoc(dummyDoc, {
        initialized: true,
        timestamp: new Date().toISOString()
      });
    }

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
};

// Example restaurant data structure
export const createRestaurant = async (restaurantData) => {
  try {
    const restaurantRef = doc(collection(db, "restaurants"));
    await setDoc(restaurantRef, {
      ...restaurantData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true
    });
    return restaurantRef.id;
  } catch (error) {
    console.error("Error creating restaurant:", error);
    throw error;
  }
};

// Example menu item data structure
export const createMenuItem = async (restaurantId, menuItemData) => {
  try {
    const menuItemRef = doc(collection(db, "menuItems"));
    await setDoc(menuItemRef, {
      ...menuItemData,
      restaurantId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isAvailable: true
    });
    return menuItemRef.id;
  } catch (error) {
    console.error("Error creating menu item:", error);
    throw error;
  }
};

// Example order data structure
export const createOrder = async (orderData) => {
  try {
    const orderRef = doc(collection(db, "orders"));
    await setDoc(orderRef, {
      ...orderData,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return orderRef.id;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Example cart data structure
export const createCart = async (userId, cartData) => {
  try {
    const cartRef = doc(db, "cart", userId);
    await setDoc(cartRef, {
      ...cartData,
      updatedAt: new Date().toISOString()
    });
    return cartRef.id;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
}; 