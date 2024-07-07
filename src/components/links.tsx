"use client";

import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Icons from "./Icons.tsx";
import { useRouter } from "next/navigation";




interface LinksBarProps {
    
  }
  
  function LinksBar() {
  
    return (
        
        <div className="flex justify-center my-3">
            <a className="mx-4" href='https://www.facebook.com/profile.php?id=100066609548992'><Icons name="Facebook" /></a>
            <a className="mx-4" href='https://www.instagram.com/vrengtband/'><Icons name="Instagram" /></a>
            <a className="mx-4" href='https://open.spotify.com/artist/61okwM4gkyEULHPVtNrfYd?si=ur4fsPOMTNST1-1tBZKnyA'><Icons name="Spotify" /></a>
            <a className="mx-4" href='https://www.youtube.com/channel/UCDcqi3PFRHdWP6WWVdVR-xQ'><Icons name="Youtube" /></a>
        </div>
    
    );
  }
  
  export default LinksBar;



