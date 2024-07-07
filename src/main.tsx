import React from 'react';
import IMG from './images/vrengt1.jpg';
import LinksBar from './components/links.tsx';


function HomePage() {

  
  return (
  <div className="bg-[url('texture.png')] bg-cover bg-fixed ">
   

    <div className="w-full h-full">
      <img src={IMG} alt="Image" className='object-contain h-full w-full'/>
    </div>

    <div className="mx-auto flex flex-col -mt-60 ">
      <h1 className="text-maintext text-primary text-center text-9xl sm:text-2xl md:text-6xl lg:text-9xl">
        Vrengt
      </h1>
      <LinksBar/>
    </div>
  </div>

  );
}

export default HomePage;
