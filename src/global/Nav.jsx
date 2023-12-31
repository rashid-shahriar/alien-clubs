import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Logo from "../assets/icons/logo-sc.webp";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "HOME",
      path: "#home",
    },
    {
      id: 2,
      link: "ABOUT",
      path: "#about",
    },
    {
      id: 3,
      link: "MINT",
      path: "#mint",
    },
    {
      id: 4,
      link: "ROADMAP",
      path: "#roadmap",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        className={
          shadow
            ? "fixed z-[100] flex h-[80px] w-full items-center text-white shadow-lg backdrop-blur-xl duration-300"
            : "fixed z-[100] flex h-[80px] w-full items-center duration-300 "
        }
      >
        {/* this is for large screen devices */}
        <div className="container  flex h-[70px] items-center justify-between ">
          <div className="font-twist flex  animate-text items-center bg-gradient-to-r from-[#F79413] via-[#627EEA] to-[#F08484] bg-clip-text text-5xl tracking-tighter text-transparent lg:w-2/6">
            <a href="#home">
              <img src={Logo} alt="" className="h-14" />
            </a>
          </div>

          <div className="flex flex-row items-center justify-end  gap-5  text-white max-lg:hidden lg:w-2/6">
            {links.map(({ id, link, path }) => (
              <nav
                key={id}
                className="greenbutton cursor-pointer font-chakra text-xl font-bold uppercase tracking-[2px]"
              >
                <a href={path} duration={500}>
                  {link}
                </a>
              </nav>
            ))}
          </div>

          <div
            onClick={handleNav}
            className="block text-lg text-white lg:hidden"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed left-0 top-0 z-40 flex h-screen w-[80%] text-black backdrop-blur-lg duration-500 ease-in lg:hidden"
            : "fixed left-[-100%] top-0 z-40 h-screen w-[80%] backdrop-blur-2xl duration-500 ease-in"
        }
      >
        <ul className="mt-20">
          {links.map(({ id, link, path }) => (
            <nav
              key={id}
              className="mx-4 my-4 cursor-pointer capitalize text-white"
            >
              <a onClick={() => setNav(!nav)} href={path} duration={500}>
                {link}
              </a>
            </nav>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
