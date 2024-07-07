import React from 'react';
import IMG from './images/vrengt1.jpg';


function HomePage() {

  
  return (
  <div className="bg-[url('texture.png')] bg-cover bg-fixed pb-[800px] ">
   

    <div className="container mx-auto flex flex-row justify-between mx-20">
      <img src={IMG} alt="Image" className='w-full abrolute'/>
    </div>
      <h1 className="text-maintext text-primary font-dm text-center text-7xl md:text-9xl -mt-60 absolute">
        Vrengt
      </h1>
  </div>

  );
}

export default HomePage;
