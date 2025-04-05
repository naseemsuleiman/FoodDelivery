import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon,
  CreditCardIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaApplePay,
  FaGooglePay,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(null), 3000);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#8B4513] to-[#704214] text-white relative">
      {/* Features Banner */}
      <div className="bg-[#4A2409] py-6 border-b border-[#9B6647]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <TruckIcon className="h-8 w-8 text-[#D4A574] group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h4 className="font-semibold text-[#D4A574]">Free Delivery</h4>
                <p className="text-sm text-gray-300">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <ClockIcon className="h-8 w-8 text-[#D4A574] group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h4 className="font-semibold text-[#D4A574]">Fast Service</h4>
                <p className="text-sm text-gray-300">30 min delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <ShieldCheckIcon className="h-8 w-8 text-[#D4A574] group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h4 className="font-semibold text-[#D4A574]">Secure Payment</h4>
                <p className="text-sm text-gray-300">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <HeartIcon className="h-8 w-8 text-[#D4A574] group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h4 className="font-semibold text-[#D4A574]">Best Quality</h4>
                <p className="text-sm text-gray-300">Premium restaurants</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#5C2C0C] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300 text-sm">Stay updated with our latest offers and deals!</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-[#4A2409] border border-[#9B6647] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4A574] flex-1 md:w-64"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200
                  ${isSubmitting ? 'bg-[#A88B6D] cursor-not-allowed' : 'bg-[#D4A574] hover:bg-[#E5B584] text-[#2C1810]'}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-[#2C1810] border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
              {subscribeStatus && (
                <div className={`absolute -bottom-8 left-0 right-0 text-center text-sm
                  ${subscribeStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {subscribeStatus === 'success' ? 'Successfully subscribed!' : 'Something went wrong. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4A574]">About FoodDelivery</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your premium food delivery service. We deliver fresh, high-quality meals
              from the finest local restaurants directly to your doorstep, ensuring
              an exceptional dining experience every time.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-300 hover:text-[#D4A574] transition-colors duration-200">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4A574] transition-colors duration-200">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4A574] transition-colors duration-200">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4A574] transition-colors duration-200">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4A574]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/home" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-2 h-0.5 bg-[#D4A574] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menus" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-2 h-0.5 bg-[#D4A574] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Menus
                </Link>
              </li>
              <li>
                <Link to="/track-orders" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-2 h-0.5 bg-[#D4A574] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Track Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-2 h-0.5 bg-[#D4A574] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4A574]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200 cursor-pointer group">
                <PhoneIcon className="h-5 w-5 mr-2 group-hover:text-[#D4A574] transition-colors duration-200" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200 cursor-pointer group">
                <EnvelopeIcon className="h-5 w-5 mr-2 group-hover:text-[#D4A574] transition-colors duration-200" />
                <span>support@fooddelivery.com</span>
              </li>
              <li className="flex items-center text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200 cursor-pointer group">
                <MapPinIcon className="h-5 w-5 mr-2 group-hover:text-[#D4A574] transition-colors duration-200" />
                <span>123 Food Street, Kitchen City</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4A574]">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                <span className="font-medium">Mon - Fri:</span> 9:00 AM - 10:00 PM
              </li>
              <li className="text-sm text-gray-300">
                <span className="font-medium">Saturday:</span> 10:00 AM - 11:00 PM
              </li>
              <li className="text-sm text-gray-300">
                <span className="font-medium">Sunday:</span> 10:00 AM - 9:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-12 py-8 border-t border-[#9B6647]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-lg font-semibold text-[#D4A574]">Accepted Payment Methods</h4>
            <div className="flex flex-wrap justify-center gap-6">
              <FaCcVisa className="h-8 w-8 text-gray-300 hover:text-[#D4A574] transition-colors duration-200" />
              <FaCcMastercard className="h-8 w-8 text-gray-300 hover:text-[#D4A574] transition-colors duration-200" />
              <FaCcPaypal className="h-8 w-8 text-gray-300 hover:text-[#D4A574] transition-colors duration-200" />
              <FaApplePay className="h-8 w-8 text-gray-300 hover:text-[#D4A574] transition-colors duration-200" />
              <FaGooglePay className="h-8 w-8 text-gray-300 hover:text-[#D4A574] transition-colors duration-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-[#9B6647] bg-[#4A2409]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <HeartIcon className="h-5 w-5 text-[#D4A574]" />
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} FoodDelivery. Made with love for food lovers.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <a href="#" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-[#D4A574] text-[#2C1810] rounded-full shadow-lg hover:bg-[#E5B584] transition-all duration-200 hover:scale-110 group z-50"
        aria-label="Back to top"
      >
        <svg
          className="h-6 w-6 transform rotate-180 group-hover:-translate-y-1 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
