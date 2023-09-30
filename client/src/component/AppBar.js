import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const AppBar = (props) => {
    const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();
      
    return (
        <>
           <div className="flex md:text-2xl justify-between py-3 px-8 sm:px-5 md:px-10 shadow "> 
                <NavLink to='/' className="font-bold md:text-3xl text-2xl p-2 sm:text-xl">
                KARTAVYA
                </NavLink>

    <div className='grid grid-cols-5 text-center justify-center w-[50%] text-black py-2 z-50 hidden font-bold   lg:grid text-cyan-20  '>
      <NavLink to="/">
        <p className='text-[10px]'>HOME</p>
      </NavLink>
      <NavLink to="/hospital-cards">
        <p className=' text-[10px]'>HOSPITAL</p>
      </NavLink>
      <NavLink to="/create-registration">
        <p className=' text-[10px]'>Create</p>
      </NavLink>
      <NavLink to="/rescue-cards">
        <p className=' text-[10px]'>RESCUE</p>
      </NavLink>
      <NavLink to="/help">
        <p className=' text-[10px]'>HELP</p>
      </NavLink>
    </div>


                { 

                isAuthenticated ? (

                    <button
                    onClick={()=> logout({ returnTo : window.location.origin})}
                    className="bg-blue-500 px-8  hover:bg-blue-500 text-white font-bold rounded-[50px] p-2 text-center"
                >
                    Logout
                </button>

                ) : (
                    <button
                        onClick={() => loginWithRedirect()}
                        className="bg-blue-500 px-8  hover:bg-blue-500 text-white font-bold rounded-[50px] p-2 text-center"
                    >
                        Login
                    </button>

                )


            }
            </div>
        </>
    );
}

export default AppBar;
