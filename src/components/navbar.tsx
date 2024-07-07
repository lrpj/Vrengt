"use client";

import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Icons from "./Icons.tsx";
import { useRouter } from "next/navigation";




interface NavBarProps {
    
  }
  
  function NavBar() {
  
    return (
        
        <nav className="navbar navbar-expand-md navbar-light bg-[#4f654a] py-4 backdrop-filter 
                    backdrop-blur-md fixed top-0 w-full
                    bg-opacity-20 shadow ">

            <div className="container-fluid flex flex-row justify-around mx-40 text-primary text-xl">

            
                
            <div className="flex">
                    <Link to='/home'>home</Link>
                </div>

                <div className="flex">
                    <Link to='/videos'>videos</Link>
                </div>

                <div className="flex">
                    <Link to='/merch'>merch</Link>
                </div>

                <div className="flex">
                    <Link to='/tickets'>tickets</Link>
                </div>


            
            </div>
        </nav>
    
    );
  }
  
  export default NavBar;



