import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const AppBar = (props) => {
    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
      
    return (
        <>
           <div className="flex md:text-2xl justify-between py-3 px-8 sm:px-5 md:px-10 shadow "> 
                <NavLink to='/' className="font-bold md:text-3xl text-2xl p-2 sm:text-xl">
                KARTAVYA
                </NavLink>

                {isLoading ? (
                    <p>Loading...</p>
                ) : isAuthenticated ? (
                    <img
                        src={user.picture}
                        alt={user.name}
                        className="w-10 h-10 rounded-full cursor-pointer"
                    />
                ) : (
                    <button
                        onClick={() => loginWithRedirect()}
                        className="bg-blue-500 px-8  hover:bg-blue-500 text-white font-bold rounded-[50px] p-2 text-center"
                    >
                        Login
                    </button>
                )}
            </div>
        </>
    );
}

export default AppBar;
