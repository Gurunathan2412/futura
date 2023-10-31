import futura from "../assets/futura_party2.png"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`relative inset-0 top-[40px] max-w-8xl`}
      >
                <div className=" w-full ">
          <img src={futura} alt="futura" className="w-full object-cover bottom-20px"/>

        </div>

        <div>
          <h1 className='absolute font-dmserif text-1xl font-semibold lg:text-[40px] absolute top-[350px] my-20 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400 z-10 capitalize bold '>
            Ground to Unleash the beast in you
          </h1>
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
