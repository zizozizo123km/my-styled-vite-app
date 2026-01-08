import React, { useState } from 'react';
import { Mail, CheckCircle, XCircle, Loader } from 'lucide-react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success', 'error', 'loading'

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    if (!isValidEmail(email)) {
      setStatus('error');
      setTimeout(() => setStatus(null), 4000);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      console.log(`Subscribing email: ${email}`);
      // In a real application, check API response here
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="flex items-center text-indigo-600">
            <Loader className="w-5 h-5 mr-2 animate-spin" />
            Processing your request...
          </div>
        );
      case 'success':
        return (
          <div className="flex items-center text-green-600 font-medium">
            <CheckCircle className="w-5 h-5 mr-2" />
            Success! Welcome to the club.
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center text-red-600 font-medium">
            <XCircle className="w-5 h-5 mr-2" />
            Invalid email or subscription failed. Please try again.
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-lg mx-auto transform hover:shadow-3xl transition duration-500 ease-in-out border border-gray-100">
      <div className="text-center mb-6">
        <Mail className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
        <h2 className="text-3xl font-extrabold text-gray-900">
          Stay Updated
        </h2>
        <p className="mt-2 text-gray-500">
          Join our newsletter and get the latest insights delivered straight to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            id="email-address"
            name="email"
            required
            className={`w-full p-4 pl-12 border ${
              status === 'error' ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 text-gray-900 placeholder-gray-400`}
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status) setStatus(null); // Clear status on input change
            }}
            disabled={status === 'loading' || status === 'success'}
          />
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <button
          type="submit"
          className={`w-full flex justify-center items-center font-semibold py-4 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg 
            ${
              status === 'loading'
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl'
            }
            text-white disabled:opacity-75`}
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? (
            <>
              <Loader className="w-5 h-5 mr-2 animate-spin" />
              Subscribing...
            </>
          ) : (
            'Subscribe Now'
          )}
        </button>
      </form>

      {/* Status Message Area */}
      <div className="mt-4 h-6 text-sm text-center">
        {getStatusMessage()}
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default SubscriptionForm;