import React from 'react';
import IMG from './images/vrengt1.jpg';
import LinksBar from './components/links.tsx';


function HomePage() {

  
  return (
  <div className="bg-[url('texture.png')] bg-fill bg-fixed ">
   

    <div className="w-full h-full">
      <img src={IMG} alt="Image" className='object-contain h-full w-full'/>
    </div>

    <div className="mx-auto flex flex-col mx-60 -mt-80 absolute">
      <h1 className="text-maintext text-primary font-dm text-center text-[150px]">
        Vrengt
      </h1>
      <LinksBar/>
    </div>
  </div>

  );
}

export default HomePage;
