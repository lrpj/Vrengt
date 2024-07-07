import React from 'react';
import NavBar from './components/navbar.tsx';
import { Routes, Route } from 'react-router-dom';
import Videos from './Pages/videos/index.tsx';
import Merch from './Pages/merch/index.tsx';
import Tickets from './Pages/tickets/index.tsx';
import HomePage from './main.tsx';
import "../src/global.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-dm bg-[url('texture.png')] bg-cover bg-fixed">
        <NavBar/>

        <Routes>   
          <Route path="/home" element={<HomePage/>} />     
          <Route path="/videos"  element={<Videos/>} />
          <Route path="/merch"  element={<Merch/>}/>
          <Route path="/tickets"  element={<Tickets/>}/>
        </Routes>
        {children}
      </body>
    </html>
  );
}