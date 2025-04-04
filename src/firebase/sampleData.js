// Sample data for testing
// Developed by Sam

import { createRestaurant, createMenuItem } from './dbInit';

export const addSampleData = async () => {
  try {
    // Sample Restaurant 1: Italian Restaurant
    const italianRestaurantId = await createRestaurant({
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
    });

    // Sample Menu Items for Italian Restaurant
    await createMenuItem(italianRestaurantId, {
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      price: 12.99,
      category: "Pizza",
      imageUrl: "https://example.com/margherita-pizza.jpg"
    });

    await createMenuItem(italianRestaurantId, {
      name: "Spaghetti Carbonara",
      description: "Pasta with eggs, cheese, pancetta, and black pepper",
      price: 14.99,
      category: "Pasta",
      imageUrl: "https://example.com/carbonara.jpg"
    });

    // Sample Restaurant 2: Indian Restaurant
    const indianRestaurantId = await createRestaurant({
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
    });

    // Sample Menu Items for Indian Restaurant
    await createMenuItem(indianRestaurantId, {
      name: "Butter Chicken",
      description: "Tender chicken in a creamy tomato sauce",
      price: 15.99,
      category: "Main Course",
      imageUrl: "https://example.com/butter-chicken.jpg"
    });

    await createMenuItem(indianRestaurantId, {
      name: "Vegetable Biryani",
      description: "Fragrant rice dish with mixed vegetables and spices",
      price: 13.99,
      category: "Rice",
      imageUrl: "https://example.com/veg-biryani.jpg"
    });

    // Sample Restaurant 3: Japanese Restaurant
    const japaneseRestaurantId = await createRestaurant({
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
    });

    // Sample Menu Items for Japanese Restaurant
    await createMenuItem(japaneseRestaurantId, {
      name: "California Roll",
      description: "Crab, avocado, and cucumber roll",
      price: 8.99,
      category: "Sushi",
      imageUrl: "https://example.com/california-roll.jpg"
    });

    await createMenuItem(japaneseRestaurantId, {
      name: "Ramen",
      description: "Traditional Japanese noodle soup",
      price: 12.99,
      category: "Noodles",
      imageUrl: "https://example.com/ramen.jpg"
    });

    console.log("Sample data added successfully");
  } catch (error) {
    console.error("Error adding sample data:", error);
    throw error;
  }
}; 