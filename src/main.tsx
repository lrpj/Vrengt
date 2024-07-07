import React from 'react';
import IMG from './images/vrengt1.jpg';
import IMG2 from './images/vrengt2.jpg';
import LinksBar from './components/links.tsx';
import IMG2c from './images/vrengt2-crop.jpg';


function HomePage() {

  
  return (
    //body
    <body className="bg-[url('texture.png')] bg-cover object-fill min-h-screen min-w-screen">

      {/* first view */}
      <div className="w-full h-full flex flex-col relative">

        <img className="sm:h-fill sm:w-fill lg:h-screen lg:w-screen object-cover pt-14 lg:py-0 md:py-5" src={IMG} alt="Random image" />

        <div className="md:absolute lg:absolute inset-0 flex flex-col md:items-center justify-end pb-10 lg:p-0">
          <h1 className="text-maintext text-primary text-3xl mx-4 md:text-6xl lg:text-9xl">
            Vrengt
          </h1>
          <h2 className='text-primary mx-4'>Rosa skyer ute nå</h2>
          <LinksBar/>
        </div>

      </div>

      {/* second view */}
      <section className="flex flex-col md:flex-row items-center justify-center h-screen md:mx-20 lg:mx-40 mt-20 flex-auto  ">
        <img className=" flex-1 object-cover w-96 bg-cover bg-center hidden md:block" src={IMG2c} alt="Second view image" />
        <img className="flex-1 object-cover w-96 bg-cover bg-center md:hidden" src={IMG2} alt="Second view image" />
        <div className="flex-1 text-primary p-20 text-center max-w- 
    screen-md w-full overflow-auto">
          <p className='whitespace-normal font  md:lg  lg:text-xl' >
          Vrengt ble dannet i 2017 i Moss, men flere av bandmedlemmene har en lang historie sammen, med tidligere samarbeid i diverse andre band og grupper. Denne tette musikalske kjemien er tydelig i deres samspill og kreative uttrykk.<br/><br/>

          Bandet ble opprinnelig startet som et prosjekt for å utforske en blanding av støyende indie rock og melodisk pop, inspirert av både internasjonale og norske band. Fra starten av har Vrengt vært drevet av en lidenskap for musikk og et ønske om å skape noe unikt. Navnet "Vrengt" symboliserer deres eksperimentelle tilnærming til musikk, hvor de vrenger og bøyer sjangere for å skape noe nytt og spennende. 
           </p>
        </div>
      </section>

    </body>
  );
}

export default HomePage;
