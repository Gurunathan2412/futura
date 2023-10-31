
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import React, { useState } from "react";

const Button = () => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="flex justify-center">
        <button
          className={`${effect && "animate-ping " && "animate-wiggle"} bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          View More..
        </button>
      </div>
    </div>
  );
}

const Works = () => {
    const [effect, setEffect] = useState(false);
  return (
    <>

      <div className='w-full flex mb-14 text-[30px] max-w-8xl leading-[30px]'>

          Technical events

      </div>
      <div class="flex min-h-screen relative justify-center bg-slate-950">
  <div class=" py-6 rounded-full  ">
    
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/30">
      <div class="h-full w-full " >
        <img class="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://c4.wallpaperflare.com/wallpaper/200/627/763/clash-of-clans-wallpaper-preview.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[-20%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Elixer Of Knowledge</h1>
        <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Paper presentation event to showcase your innovation in your projects</p>
        <div
          className={`${effect && "animate-ping "} bg-blue-500 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          View More..
        </div> </div>
    </div>
    
    
  </div>
  
  

</div>
<div class="flex min-h-screen relative justify-center bg-slate-950">
  <div class=" bottom-8px rounded-full  ">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/30">
      <div class="h-full w-full " >
        <img class="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://c4.wallpaperflare.com/wallpaper/447/482/500/video-game-clash-of-clans-wallpaper-preview.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[-20%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">P.E.K.K.A. Programming Showdown</h1>
        <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Wage a friendly battles on codes</p>
        <div
          className={`${effect && "animate-ping "} bg-blue-500 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          View More..
        </div>   </div>
    </div>
    
  </div>
  
  

</div>

<div class="flex min-h-screen relative justify-center bg-slate-950">
  <div class=" bottom-8px rounded-full  ">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/30">
      <div class="h-full w-full " >
        <img class="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://c4.wallpaperflare.com/wallpaper/723/833/253/clash-of-clans-background-wallpaper-preview.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[-20%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Algorithm Arena</h1>
        <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Build a AI Model to enhance the performance of Builders</p>
        <div
          className={`${effect && "animate-ping "} bg-blue-500 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          View More..
        </div> </div>
    </div>
    
  </div>
  
  

</div>

<div class="flex min-h-screen relative justify-center bg-slate-950">
  <div class=" bottom-8px rounded-full  ">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/30">
      <div class="h-full w-full " >
        <img class="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://c4.wallpaperflare.com/wallpaper/191/116/963/video-game-clash-of-clans-wallpaper-preview.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[-20%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Web Wizard Wars: Designing with AI</h1>
        <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Develop the best layout and ground to attack </p>
        <div
          className={`${effect && "animate-ping "} bg-blue-500 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          View More..
        </div> </div>
    </div>
    
  </div>
  
  

</div>


      <div className='w-full flex mt-20 text-[30px] max-w-8xl leading-[80px]'>

          Non Technical events       
      </div>

      <div class="flex min-h-screen relative justify-center bg-slate-950">
  <div class=" rounded-full  ">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/30">
      <div class="h-full w-full " >
        <img class="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://c4.wallpaperflare.com/wallpaper/872/420/38/video-game-clash-of-clans-wallpaper-preview.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[-10%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Hidden Hoards: Clash Treasure Expedition</h1>
        <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Find the hidden resources and loot the treasures </p>
        <div
          className={`${effect && "animate-ping "} bg-blue-500 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          View More..
        </div> </div>
    </div>
    
  </div>
</div>

<div class="flex min-h-screen relative justify-center bg-slate-950">
  <div class=" rounded-full  ">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/30">
      <div class="h-full w-full " >
        <img class="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://c4.wallpaperflare.com/wallpaper/844/513/157/clash-of-clans-wallpaper-preview.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[-20%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-4xl font-bold text-white">Clash of Cinephiles</h1>
        <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Event Description</p>
        <div
          className={`${effect && "animate-ping "} bg-blue-500 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          View More..
        </div> </div>
    </div>
    
  </div>
</div>

<div class="flex min-h-screen relative justify-center bg-slate-950">
  <div class=" rounded-full  ">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/30">
      <div class="h-full w-full " >
        <img class="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://e1.pxfuel.com/desktop-wallpaper/20/700/desktop-wallpaper-clash-of-clans-7th-anniversary-party-wizard-1-gem-boost-special-obstacle-and-more-coc-wizard.jpg" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[-20%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-4xl font-bold text-white">Sonic Siege</h1>
        <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">To increase the vibe of the party</p>
        <div
          className={`${effect && "animate-ping "} bg-blue-500 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          View More..
        </div> </div>
    </div>
    
  </div>
</div>
    </>

  );
};

export default SectionWrapper(Works, "events");
