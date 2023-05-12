

import { useEffect, useState } from "react";
import Footer from "./scenes/Footer";
import HeroSection from "./scenes/HeroSection";
import WhatWeOfferSection from "./scenes/WhatWeOfferSection";
import WhereDoYouFallSection from "./scenes/WhereDoYouFall";
import MenuIcon from "../components/Vectors/MenuIcon";
import CloseMenuIcon from "../components/Vectors/CloseMenuIcon";
import LogoIcon from "../components/Vectors/LogoIcon";
import Link from "next/link";



export default function Home() {
  const [isNavOpened, setIsNavOpened] = useState(false)
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300
        ? setNavBg(true)
        : setNavBg(false);
    };

    window.addEventListener(
      'scroll',
      handleScrollButtonVisibility
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScrollButtonVisibility
      );
    };
  }, []);

  return (
    <div className="max-w-[1750px] mx-auto">
      <div
        className={`overlay z-[99] fixed top-0 left-0 h-screen w-full ${isNavOpened ? 'block ' : 'hidden'}`}
        onClick={() => setIsNavOpened(false)}
      ></div>

      <nav className={`xl:hidden fixed px-4 sm:px-6 md:px-10 xl:px-[100px] transition-all duration-300 ease-in ${navBg && 'bg-[#ffffff] shadow'} z-[100] w-full top-0 flex justify-between items-center py-3 md:py-4 lg:py-[24px]`}>
        <Link href='/' className=" z-[100] flex1 pt[37px]">
          <LogoIcon width={'60'} height={'60'} />
        </Link>
        <div className="flex-1 hidden text-base lg:text-lg md:flex justify-between  pt[51px] pb[46px] ">
          <a href='#' className="text-base md:text-xl font-medium text-primary">About</a>
          <a href='#' className="text-base md:text-xl font-medium text-primary">Features</a>
          <a href='#' className="text-base md:text-xl font-medium text-primary">Contact Us</a>
        </div>

        <button
          className='flex md:hidden'
          onClick={() => setIsNavOpened(true)}
        >
          <MenuIcon />
        </button>

        {/* MOBILE NAV SIDEBAR */}
        <aside
          className={`flex z-[1000] md:hidden px-[7%] transition-all duration-500 flex-col items-center z-999] fixed top-0 h-screen bg-primary ${isNavOpened
            ? 'right-0 w-[70%]'
            : '-right-[100vw]'
            } `}
        >
          <button
            className='absolute top-9 right-[4.5%]'
            onClick={() => setIsNavOpened(false)}
          >
            <CloseMenuIcon />
          </button>

          <div className="w-full flex mt-[200px] text-base text-white-1 mb12 gap-6 flex-col text-center">
            {NavLinks.map((navlink, i) => (
              <a
                key={i}
                className="hover:bg-white hover:text-primary py-2 rounded-[8px]"
                href='#'
                onClick={() => setIsNavOpened(false)}
              >
                {navlink.title}
              </a>
            ))}
          </div>

        </aside>
      </nav>

      <HeroSection />
      <WhatWeOfferSection />
      <WhereDoYouFallSection />
      <Footer />
    </div>
  )
}


const NavLinks = [
  { id: 1, title: 'About Us' },
  { id: 2, title: 'Features' },
  { id: 3, title: 'Contact Us' },
]