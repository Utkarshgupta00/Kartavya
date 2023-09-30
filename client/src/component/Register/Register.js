import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Register = () => {
  const [rescueEmails, setRescueEmails] = useState([]);

  const { user, isAuthenticated } = useAuth0();

//changed from here
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    // Fetch rescue team emails from your backend API
    fetch('http://localhost:3001/rescue-team-data/rescue-team-number')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNumbers(data);
        console.log('Rescue Emails:', data);
      })
      .catch((error) => {
        console.error('Error fetching rescue team emails:', error);
      });
  }, []);

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
            
          <div className='text-center h-[50px] w-[50px] animate-bounce fixed bottom-[80px] right-5 font-bold font-serif p-1 bg-black rounded-[50%] mt-5'>
            
            <NavLink to="/alert-form" className=" text-3xl  ">
            <i class="zmdi zmdi-alert-triangle text-yellow-500"></i>
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
