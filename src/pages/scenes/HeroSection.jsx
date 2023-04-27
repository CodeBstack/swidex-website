import React, { useState } from 'react'
import LogoIcon from "../../components/Vectors/LogoIcon";
import ScrollDownIcon from '../../components/Vectors/ScrollDownIcon';
import CloseMenuIcon from '../../components/Vectors/CloseMenuIcon';
import MenuIcon from '../../components/Vectors/MenuIcon';

const HeroSection = () => {
    const [isNavOpened, setIsNavOpened] = useState(false)

    return (
        <>
            {/* SHOWS ONLY ON SCREENS LOWER THAN 1280PX */}
            <main className="relative h-screen bg-header-bg bg-cover bg-no-repeat px-4 sm:px-6 md:px-10 xl:px-[100px] xl:hidden">
                <nav className="sticky w-full top-0 flex justify-between items-center py-4 lg:py-[37px]">
                    <div className="  flex-1 pt[37px]">
                        <LogoIcon />
                    </div>
                    <div className="flex-1 hidden md:flex justify-between  pt[51px] pb[46px] ">
                        <a href='#' className="text-2xl font-medium text-primary">About</a>
                        <a href='#' className="text-2xl font-medium text-primary">Features</a>
                        <a href='#' className="text-2xl font-medium text-primary">Contact Us</a>
                    </div>

                    <button
                        className='flex md:hidden'
                        onClick={() => setIsNavOpened(true)}
                    >
                        <MenuIcon />
                    </button>

                    {/* MOBILE NAV SIDEBAR */}
                    <aside
                        className={`flex md:hidden px-[7%] transition-all duration-500 flex-col items-center z-[999] fixed top-0 h-screen bg-primary ${isNavOpened
                            ? 'right-0 w-[70%]'
                            : '-right-[100vw]'
                            } `}
                    >
                        <button
                            className='absolute top-12 right-[4.5%]'
                            onClick={() => setIsNavOpened(false)}
                        >
                            <CloseMenuIcon />
                        </button>

                        <div className="w-full flex mt-[200px] text-xl text-white-1 mb12 gap-6 flex-col text-center">
                            {NavLinks.map((navlink, i) => (
                                <a
                                    key={i}
                                    className="hover:bg-white hover:text-primary py-2 rounded-[8px]"
                                    href='#'

                                >
                                    <span className=''>{navlink.title}</span>
                                </a>
                            ))}
                        </div>

                    </aside>
                </nav>

                <div className="">
                    <div className="text mt-8">
                        <h2 className="font-bold text-3xl sm:text-5xl lg:leading-[80px] lg:text-[54px] text-black max-w-[687px]">
                            We give agents and their clients {" "}
                            <span className="text-positive">access</span>  {" "}
                            to  {" "} <span className="text-positive">digital</span>  {" "}
                            financial  {" "}
                            <span className="text-positive">services</span>
                        </h2>
                        <p className="font-normal text-2xl mt-6 text-black font-Open">
                            Never spend your money before you’ve earned it
                        </p>

                        <div className="flex gap-8 items-center mt-12">
                            <button
                                className='bg-primary text-white-1 hover:bg-[#959595] hover:text-primary font-semibold text-base sm:text-xl md:text-2xl rounded-[80px] px-6 md:px-12 py-3 md:py-[18px]'
                            >
                                Get Started
                            </button>

                            <a
                                href="#section_2"
                                className=" hover:animate-bounce flex gap-2 items-center text-black text-xl md:text-2xl"
                            >Scroll Down <ScrollDownIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* SHOWS ONLY ON SCREENS LARGER THAN 1280PX */}
            <main className='hidden xl:flex '>
                <div className="flex flex-col justify-center relative pl-4 sm:pl-6 md:pl-10 xl:pl-[100px] h-screen w-[65%] bg-header-bg bg-cover bg-no-repeat">
                    <div className=" absolute top-[37px]">
                        <LogoIcon />
                    </div>

                    <div className="text">
                        <h2 className="font-bold text-[54px] text-black max-w-[687px]">
                            We give agents and their clients {" "}
                            <span className="text-positive">access</span>  {" "}
                            to  {" "} <span className="text-positive">digital</span>  {" "}
                            financial  {" "}
                            <span className="text-positive">services</span>
                        </h2>
                        <p className="font-normal text-2xl mt-6 text-black font-Open">
                            Never spend your money before you’ve earned it
                        </p>

                        <div className="flex gap-8 items-center mt-12">
                            <button
                                className='bg-primary text-white-1 font-semibold text-2xl rounded-[80px] px-12 py-[18px]'
                            >
                                Get Started
                            </button>

                            <a
                                href="#section_2"
                                className=" hover:animate-bounce flex gap-2 items-center text-black text-2xl"
                            >Scroll Down <ScrollDownIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[35%] bg-primary">
                    <div className="flex justify-evenly items-center pt-[51px] pb-[46px]">
                        <a href='#' className="text-2xl font-medium text-white-1">About</a>
                        <a href='#' className="text-2xl font-medium text-white-1">Features</a>
                        <a href='#' className="text-2xl font-medium text-white-1">Contact Us</a>
                    </div>
                </div>

            </main>


        </>
    )
}

export default HeroSection


const NavLinks = [
    { id: 1, title: 'About Us' },
    { id: 2, title: 'Features' },
    { id: 3, title: 'Contact Us' },
]