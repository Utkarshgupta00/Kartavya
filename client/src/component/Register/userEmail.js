import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/user-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
      } else {
        console.error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p className="text-green-600">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
            className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          />
          <button
            type="submit"
            className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

export default NewsletterSignup;
