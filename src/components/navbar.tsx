import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  
    return (
        
        <nav className="navbar navbar-expand-md navbar-light bg-[#4f654a] py-4 backdrop-filter 
                    backdrop-blur-md fixed top-0 w-full
                    bg-opacity-20 shadow z-10">

            <div className="container-fluid flex flex-row justify-between lm:justify-around mx-4 md:mx-40 lg:mx-80 text-primary text-xl ">

            
                
                <div className="group text-primary transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        <Link to='/home'>home</Link>
                    </span>
                    
                </div>

                <div className="group text-primary transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        <Link to='/videos'>videos</Link>
                    </span>
                </div>

                <div className="group text-primary transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        <Link to='/merch'>merch</Link>
                    </span>
                </div>

                <div className="group text-primary transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        <Link to='/tickets'>tickets</Link>
                    </span>
                </div>


            
            </div>
        </nav>
    
    );
  }

export default Navbar;



