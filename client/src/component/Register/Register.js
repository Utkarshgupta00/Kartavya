import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Register = () => {
  const [rescueEmails, setRescueEmails] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    // Fetch rescue team emails from your backend API
    fetch('http://localhost:3001/rescue-team-data/rescue-team-emails')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRescueEmails(data);
        console.log('Rescue Emails:', data);
      })
      .catch((error) => {
        console.error('Error fetching rescue team emails:', error);
      });
  }, []);

  if (!isAuthenticated) {
    // User is not authenticated, handle accordingly
    return (
      <>
        
      </>
    );
  }

  const userEmail = user.email;

  // Check if userEmail exists in the rescueEmails array
  const isUserInRescueEmails = rescueEmails.includes(userEmail);

  return (
    <>
    
    <div>
      
      <div>
        {isUserInRescueEmails ? (
            
          <div className='text-center font-bold font-serif py-5 bg-red-500 mx-10 rounded-lg mt-5'>
            <h1>You Can Add Alerts Only If </h1>
            <NavLink to="/alert-form-01023" className="text-2xl w-[90%] rounded-lg ">
                Add Alert
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>


    </div>    
    
    
    </>

  );
};

export default Register;
