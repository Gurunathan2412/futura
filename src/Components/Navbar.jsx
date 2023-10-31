import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import vlogo from "../assets/vlogo1.mp4";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-6 px-5 w-full flex items-center py-2 fixed top-0 z-20 bg-black`}
    >
      <div className='w-full flex justify-between items-center max-w-6xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(2, 6);
          }}
        >
               <div className="fit relative w-2/4 ">
        <video src={vlogo} autoPlay loop muted  />
      </div>
        </Link>

        <ul className='list-none text-[10px] hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-amber-300"} text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-white  hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        

        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[84px] h-[84px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 max-w-[540px] z-10 rounded-2xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
                
              ))}
            </ul>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  For contacts
                </h2>
                <div className="flex gap-4 ">
                  <span className="bannerIcon tracking-wide cursor-pointer Onhover:text-amber-300 duration-300">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon tracking-wide cursor-pointer hover:text-amber-300 duration-300">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon tracking-wide cursor-pointer hover:text-amber-300 duration-300">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
