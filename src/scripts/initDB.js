import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4HozTLzuhATRYl-P-6rSSTnafNTdkEX4",
  authDomain: "food-delivery-app-db5aa.firebaseapp.com",
  projectId: "food-delivery-app-db5aa",
  storageBucket: "food-delivery-app-db5aa.appspot.com",
  messagingSenderId: "344148674980",
  appId: "1:344148674980:web:059a1521894b989b925931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize collections
const initializeCollections = async () => {
  try {
    const collections = ['users', 'restaurants', 'menuItems', 'orders', 'cart'];
    
    for (const collectionName of collections) {
      const collectionRef = collection(db, collectionName);
      const docRef = doc(collectionRef);
      await setDoc(docRef, {
        initialized: true,
        timestamp: new Date().toISOString()
      });
      console.log(`Collection ${collectionName} initialized`);
    }
    
    console.log("All collections initialized successfully");
  } catch (error) {
    console.error("Error initializing collections:", error);
    throw error;
  }
};

// Run initialization
initializeCollections()
  .then(() => {
    console.log("Database initialization complete");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Initialization failed:", error);
    process.exit(1);
  }); 