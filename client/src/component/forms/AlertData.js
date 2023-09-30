import React, { useState, useEffect } from 'react';

const AlertData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    requirement: '',
    credential: '',
  });

  const [credentials, setCredentials] = useState([]);
  const [credentialError, setCredentialError] = useState(false);

  useEffect(() => {
    // Fetch rescue team emails from your backend API
    fetch('http://localhost:3001/rescue-team-data/rescue-team-credential')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCredentials(data);
        console.log('Rescue Emails:', data);
      })
      .catch((error) => {
        console.error('Error fetching rescue team emails:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the credential error message when the user makes changes
    setCredentialError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the entered credential is valid
    const isValidCredential = credentials.includes(formData.credential);

    if (!isValidCredential) {
      console.error('Credential ID is incorrect. Unable to send data.');
      setCredentialError(true);
      return;
    }

    try {
      // Continue with form submission logic here since the credential is valid

      const response = await fetch('http://localhost:3001/recent-alerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log('Form data submitted successfully:', data);
        // You can also reset the form or redirect the user to a success page here
      } else {
        console.error('Form submission failed:', response);
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }

    try {
      const response = await fetch('http://localhost:3001/recent-alerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log('Form data submitted successfully:', data);
        // You can also reset the form or redirect the user to a success page here
      } else {
        console.error('Form submission failed:', response);
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  
    try {
      const response1 = await fetch('http://localhost:3001/hospital-data/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toEmails: ['recipient1@example.com', 'recipient2@example.com'], // Replace with your recipient emails
          subject: 'Alert Form Submission',
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}\nLocation: ${formData.location}\nRequirements: ${formData.requirement}`,
        }),
      });
  
      if (response1.status === 200) {
        const data1 = await response1.json();
        console.log('Email sent successfully:', data1);
        // You can also reset the form or redirect the user to a success page here
      } else {
        console.error('Email sending failed:', response1);
      }
  
      const response2 = await fetch('http://localhost:3001/rescue-team-data/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toEmails: ['recipient1@example.com', 'recipient2@example.com'], // Replace with your recipient emails
          subject: 'Alert Form Submission',
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}\nLocation: ${formData.location}\nRequirements: ${formData.requirement}`,
        }),
      });
  
      if (response2.status === 200) {
        const data2 = await response2.json();
        console.log('Email sent successfully:', data2);
        // You can also reset the form or redirect the user to a success page here
      } else {
        console.error('Email sending failed:', response2);
      }
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
    }



    //

    const response3 = await fetch('http://localhost:3001/user-subscription/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        toEmails: ['recipient1@example.com', 'recipient2@example.com'], // Replace with your recipient emails
        subject: 'Alert Form Submission',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}\nLocation: ${formData.location}\nRequirements: ${formData.requirement}`,
      }),
    });


    if (response3.status === 200) {
      const data1 = await response3.json();
      console.log('Email sent successfully:', data1);
      // You can also reset the form or redirect the user to a success page here
    } else {
      console.error('Email sending failed:', response3);
    }





   
  };

  return (
    <div className='lg:grid lg:grid-cols-2 w-[100%]'>
      <div className='lg:mt-10 w-[100%] lg:order-last'>
        <img src="image/alertpage.jpg" className=' lg:mt-20' alt="" />
      </div>

      <div className="max-w-md mx-auto lg:mt-20 mt-10 md:w-[90%] w-[90%] ">
        <h2 className='font-bold text-3xl text-center lg:mt-10 mb-20 mt-5 '>
          <span className='text-red-600 font-extrabold font-serif animate-pulse text-5xl'>Alert </span> Fill Now To Update
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Rescue Team Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-600">
              Enter Exact Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="requirement" className="block text-sm font-medium text-gray-600">
              Enter Requirements
            </label>
            <input
              type="text"
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="credential" className="block text-sm font-medium text-gray-600">
              Enter Your Credential ID
            </label>
            <input
              type="text"
              id="credential"
              name="credential"
              value={formData.credential}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500 ${credentialError ? 'border-red-500' : ''}`}
              required
            />
            {credentialError && (
              <p className="text-red-500 text-sm mt-2">Credential ID is incorrect. Please try again.</p>
            )}
          </div>

          <div className="mt-10 justify-center text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlertData;
