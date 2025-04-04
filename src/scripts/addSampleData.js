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

// Sample data
const sampleData = {
  restaurants: [
    {
      name: "Mama Mia Italian",
      description: "Authentic Italian cuisine with fresh ingredients",
      address: "123 Pasta Street, Food City",
      phone: "+1 234-567-8901",
      rating: 4.5,
      imageUrl: "https://example.com/italian-restaurant.jpg",
      cuisine: "Italian",
      openingHours: {
        monday: "10:00-22:00",
        tuesday: "10:00-22:00",
        wednesday: "10:00-22:00",
        thursday: "10:00-22:00",
        friday: "10:00-23:00",
        saturday: "11:00-23:00",
        sunday: "11:00-22:00"
      }
    },
    {
      name: "Spice of India",
      description: "Traditional Indian cuisine with rich flavors",
      address: "456 Curry Lane, Food City",
      phone: "+1 234-567-8902",
      rating: 4.7,
      imageUrl: "https://example.com/indian-restaurant.jpg",
      cuisine: "Indian",
      openingHours: {
        monday: "11:00-22:00",
        tuesday: "11:00-22:00",
        wednesday: "11:00-22:00",
        thursday: "11:00-22:00",
        friday: "11:00-23:00",
        saturday: "12:00-23:00",
        sunday: "12:00-22:00"
      }
    },
    {
      name: "Sushi Master",
      description: "Fresh sushi and Japanese specialties",
      address: "789 Sushi Avenue, Food City",
      phone: "+1 234-567-8903",
      rating: 4.8,
      imageUrl: "https://example.com/japanese-restaurant.jpg",
      cuisine: "Japanese",
      openingHours: {
        monday: "11:00-21:00",
        tuesday: "11:00-21:00",
        wednesday: "11:00-21:00",
        thursday: "11:00-21:00",
        friday: "11:00-22:00",
        saturday: "12:00-22:00",
        sunday: "12:00-21:00"
      }
    }
  ],
  menuItems: [
    {
      restaurantId: "", // Will be set dynamically
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      price: 12.99,
      category: "Pizza",
      imageUrl: "https://example.com/margherita-pizza.jpg"
    },
    {
      restaurantId: "", // Will be set dynamically
      name: "Spaghetti Carbonara",
      description: "Pasta with eggs, cheese, pancetta, and black pepper",
      price: 14.99,
      category: "Pasta",
      imageUrl: "https://example.com/carbonara.jpg"
    },
    {
      restaurantId: "", // Will be set dynamically
      name: "Butter Chicken",
      description: "Tender chicken in a creamy tomato sauce",
      price: 15.99,
      category: "Main Course",
      imageUrl: "https://example.com/butter-chicken.jpg"
    },
    {
      restaurantId: "", // Will be set dynamically
      name: "Vegetable Biryani",
      description: "Fragrant rice dish with mixed vegetables and spices",
      price: 13.99,
      category: "Rice",
      imageUrl: "https://example.com/veg-biryani.jpg"
    },
    {
      restaurantId: "", // Will be set dynamically
      name: "California Roll",
      description: "Crab, avocado, and cucumber roll",
      price: 8.99,
      category: "Sushi",
      imageUrl: "https://example.com/california-roll.jpg"
    },
    {
      restaurantId: "", // Will be set dynamically
      name: "Ramen",
      description: "Traditional Japanese noodle soup",
      price: 12.99,
      category: "Noodles",
      imageUrl: "https://example.com/ramen.jpg"
    }
  ]
};

// Add sample data
const addSampleData = async () => {
  try {
    // Add restaurants
    const restaurantIds = [];
    for (const restaurant of sampleData.restaurants) {
      const restaurantRef = doc(collection(db, "restaurants"));
      await setDoc(restaurantRef, {
        ...restaurant,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isActive: true
      });
      restaurantIds.push(restaurantRef.id);
      console.log(`Added restaurant: ${restaurant.name}`);
    }

    // Add menu items
    let menuItemIndex = 0;
    for (const restaurantId of restaurantIds) {
      // Add 2 menu items per restaurant
      for (let i = 0; i < 2; i++) {
        const menuItem = {
          ...sampleData.menuItems[menuItemIndex],
          restaurantId
        };
        const menuItemRef = doc(collection(db, "menuItems"));
        await setDoc(menuItemRef, {
          ...menuItem,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isAvailable: true
        });
        console.log(`Added menu item: ${menuItem.name} for restaurant ${restaurantId}`);
        menuItemIndex++;
      }
    }

    console.log("Sample data added successfully");
  } catch (error) {
    console.error("Error adding sample data:", error);
    throw error;
  }
};

// Run the script
addSampleData()
  .then(() => {
    console.log("Database population complete");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Population failed:", error);
    process.exit(1);
  }); 