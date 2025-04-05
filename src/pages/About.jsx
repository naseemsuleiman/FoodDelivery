import React from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  HeartIcon,
  TruckIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { label: 'Happy Customers', value: '10K+', icon: HeartIcon },
    { label: 'Cities Covered', value: '25+', icon: TruckIcon },
    { label: 'Restaurant Partners', value: '100+', icon: UserGroupIcon },
    { label: 'Years of Service', value: '5+', icon: SparklesIcon },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We partner with only the finest restaurants to ensure exceptional food quality.',
      icon: SparklesIcon,
    },
    {
      title: 'Lightning Fast Delivery',
      description: 'Our efficient delivery network ensures your food arrives hot and fresh.',
      icon: TruckIcon,
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We go above and beyond to exceed expectations.',
      icon: HeartIcon,
    },
    {
      title: 'Food Safety',
      description: 'Rigorous safety standards and contactless delivery options for your peace of mind.',
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#8B4513] to-[#704214] text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Delivering Happiness,<br />One Meal at a Time
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              We're more than just a food delivery service. We're your partner in creating memorable dining experiences, connecting you with the best local restaurants.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-[#8B4513]" />
                <div className="text-3xl font-bold text-[#8B4513] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020, FoodDelivery was born from a simple idea: everyone deserves access to great food. What started as a small delivery service in one city has grown into a nationwide platform connecting food lovers with their favorite restaurants. Our journey has been flavored with passion, dedication, and the joy of serving millions of satisfied customers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <value.icon className="h-8 w-8 text-[#8B4513] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#8B4513] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of satisfied customers who trust us with their dining needs.
            </p>
            <button
              className="bg-white text-[#8B4513] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              onClick={() => window.location.href = '/signup'}
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
