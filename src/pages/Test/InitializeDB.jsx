import React, { useState } from 'react';
import { initializeDatabase } from '../../firebase/dbInit';
import { addSampleData } from '../../firebase/sampleData';

const InitializeDB = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInitialize = async () => {
    setLoading(true);
    setMessage('');
    try {
      await initializeDatabase();
      setMessage('Database initialized successfully!');
    } catch (error) {
      setMessage(`Error initializing database: ${error.message}`);
    }
    setLoading(false);
  };

  const handleAddSampleData = async () => {
    setLoading(true);
    setMessage('');
    try {
      await addSampleData();
      setMessage('Sample data added successfully!');
    } catch (error) {
      setMessage(`Error adding sample data: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Database Initialization</h1>
        
        <div className="space-y-4">
          <button
            onClick={handleInitialize}
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Initializing...' : 'Initialize Database'}
          </button>

          <button
            onClick={handleAddSampleData}
            disabled={loading}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
          >
            {loading ? 'Adding Data...' : 'Add Sample Data'}
          </button>

          {message && (
            <div className={`p-4 rounded ${
              message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InitializeDB; 