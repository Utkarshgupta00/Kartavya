import React from 'react';
import { NavLink } from 'react-router-dom';

const AppBar = (props) => {
    

      
    return (
        <>
           <div className="flex md:text-2xl justify-between py-4 px-8 sm:px-5 md:px-10"> 
                <NavLink to='/' className="font-bold md:text-3xl text-2xl">
                    LOGO
                </NavLink>

                <NavLink to="/hospital-registration" className="bg-orange-500 px-8  hover:bg-orange-400 text-white font-bold rounded p-2 text-center">Register</NavLink>

            </div>
        </>
    )
}

export default AppBar;
