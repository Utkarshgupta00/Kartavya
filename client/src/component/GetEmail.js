import React, { useState, useEffect } from 'react';

function EmailList() {
  const [location, setLocation] = useState('');
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [emailContent, setEmailContent] = useState('');
  const [sending, setSending] = useState(false); 

  useEffect(() => {
    // Fetch data from your backend API
    fetch('http://localhost:3001/hospital-data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setEmails(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Filter emails based on the location input
    if (location.trim() === '') {
      setFilteredEmails(emails);
    } else {
      const filtered = emails.filter((email) =>
        email.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredEmails(filtered);
    }
  }, [location, emails]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleEmailContentChange = (event) => {
    setEmailContent(event.target.value);
  };

  const sendEmails = () => {
    setSending(true);

    const emailAddresses = filteredEmails.map((email) => email.HospitalEmail);

    // Make a POST request to your server-side API to send emails
    fetch('http://localhost:3001/hospital-data/send-emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailAddresses, emailContent }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error sending emails');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Emails sent successfully:', data);
        setSending(false);
      })
      .catch((error) => {
        console.error('Error sending emails:', error);
        setSending(false);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Email List</h1>
      <div className="mb-4">
        <label htmlFor="location" className="block font-semibold">
          Location:
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          className="border border-gray-400 rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="emailContent" className="block font-semibold">
          Email Content:
        </label>
        <textarea
          id="emailContent"
          value={emailContent}
          onChange={handleEmailContentChange}
          className="border border-gray-400 rounded p-2 w-full"
          rows="4"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={sendEmails}
          className={`bg-blue-500 text-white py-2 px-4 rounded ${
            sending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send Emails'}
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Filtered Emails:</h2>
        <ul className="list-disc ml-6">
          {filteredEmails.map((email, index) => (
            <li key={index} className="mb-2">
              {email.HospitalEmail}
            </li>
          ))}
        </ul>
      </div>
    </div> 
  );
}

export default EmailList;
