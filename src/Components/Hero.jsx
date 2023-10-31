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
        <h1 class="relative text-2xl lg:text-4xl xl:text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400 capitalize py-4 lg:py-6 xl:py-8 leading-tight">
    Ground to Unleash the Beast in You
</h1>


        </div>
      
      </div>
    </section>
  );
};

export default Hero;
