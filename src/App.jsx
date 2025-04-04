import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { db, collection, addDoc, updateDoc, doc, onSnapshot } from './firebase'; // Firebase imports
import Home from './Features/Home';
import Menus from './Features/Menus';
import Navbar from './Features/Navbar';
import Cart from './Features/Cart';
import Footer from './Features/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);
  const [driverInfo, setDriverInfo] = useState(null); 
  const [driverLocation, setDriverLocation] = useState(null); 

  
  const addToCart = (meal) => {
    setCart([...cart, meal]);
  };

 
  const removeFromCart = (idMeal) => {
    setCart(cart.filter((meal) => meal.idMeal !== idMeal));
  };


  const clearCart = () => {
    setCart([]);
  };

  
  const placeOrder = async () => {
    if (cart.length === 0) return;

    try {
      
      const orderRef = await addDoc(collection(db, 'orders'), {
        idMeal: cart[0].idMeal,
        status: 'Pending',
        deliveryStatus: 'Assigned', 
        driverId: 'driver_1', 
        driverLocation: {
          lat: 1.286389, 
          lng: 36.817223
        }
      });

    
      const driverRef = doc(db, 'drivers', 'driver_1');
      const driverLocationRef = doc(db, 'orders', orderRef.id);
      
      setInterval(async () => {
        const newLocation = {
          lat: 1.287000 + Math.random() * 0.001, 
          lng: 36.817500 + Math.random() * 0.001
        };
        
        await updateDoc(driverRef, { location: newLocation });
        await updateDoc(driverLocationRef, { driverLocation: newLocation });
      }, 5000); 

    } catch (e) {
      console.error('Error placing order: ', e);
    }
  };

 
  useEffect(() => {
    const unsubscribeDriverLocation = onSnapshot(doc(db, 'drivers', 'driver_1'), (doc) => {
      const driverData = doc.data();
      setDriverLocation(driverData.location);
    });

    return () => unsubscribeDriverLocation();
  }, []);

  
  useEffect(() => {
    const orderCollection = collection(db, 'orders');
    const unsubscribeOrderStatus = onSnapshot(orderCollection, (snapshot) => {
      snapshot.forEach((doc) => {
        const order = doc.data();
        if (order.idMeal === cart[0]?.idMeal) { 
          setOrderStatus(order.deliveryStatus);
          if (order.driverId) {
            setDriverInfo(order.driverId);
          }
        }
      });
    });

    return () => unsubscribeOrderStatus();
  }, [cart]);

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
      </Routes>
      <Footer />

      {/* Order and Driver Status */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white p-4 text-center">
          <p>Order Status: {orderStatus || 'Pending'}</p>
          {driverInfo && <p>Driver: {driverInfo}</p>}
          {driverLocation && (
            <div>
              <p>Driver Location: </p>
              <p>Latitude: {driverLocation.lat.toFixed(5)}, Longitude: {driverLocation.lng.toFixed(5)}</p>
            </div>
          )}
          <button
            onClick={placeOrder}
            className="px-4 py-2 bg-white text-green-600 rounded-lg mt-2"
          >
            Place Order
          </button>
        </div>
      )}
    </>
  );
}

export default App;
