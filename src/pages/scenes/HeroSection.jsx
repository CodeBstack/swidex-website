/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import LogoIcon from "../../components/Vectors/LogoIcon";
import ScrollDownIcon from '../../components/Vectors/ScrollDownIcon';
import CloseMenuIcon from '../../components/Vectors/CloseMenuIcon';
import MenuIcon from '../../components/Vectors/MenuIcon';
import LogoIcon2 from '../../components/Vectors/LogoIcon2';

const HeroSection = () => {
    const [isNavOpened, setIsNavOpened] = useState(false)

    return (
        <>
            {/* SHOWS ONLY ON SCREENS LOWER THAN 1280PX */}
            <main className="h-4/5 md:min-h-screen bg-header-bg bg-cover bg-no-repeat px-4 sm:px-6 md:px-10 xl:px-[100px] pb-10 md:pb-20 xl:hidden">
                <nav className="sticky w-full top-0 flex justify-between items-center py-4 lg:py-[37px]">
                    <div className="  flex-1 pt[37px]">
                        <LogoIcon />
                    </div>
                    <div className="flex-1 hidden md:flex justify-between  pt[51px] pb[46px] ">
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

                        <div className="w-full flex mt-[200px] text-base text-white-1 mb12 gap-6 flex-col text-center">
                            {NavLinks.map((navlink, i) => (
                                <a
                                    key={i}
                                    className="hover:bg-white hover:text-primary py-2 rounded-[8px]"
                                    href='#'

                                >
                                    {navlink.title}
                                </a>
                            ))}
                        </div>

                    </aside>
                </nav>

                <div className="flex flex-col mt-8 mb-20 lg:flex-row">
                    <div className="text mt-8 flex-1">
                        <h2 className="font-bold text-2xl sm:text-[48px] leading-[40px] sm:leading-[56px] lgtext-[54px] text-black w-full max-w-[687px]">
                            We give agents and their clients {" "}
                            <span className="text-positive">access</span>  {" "}
                            to  {" "} <span className="text-positive">digital</span>  {" "}
                            financial  {" "}
                            <span className="text-positive">services</span>
                        </h2>
                        <p className="font-normal text-base md:text-2xl mt-3 md:mt-6 text-black font-Open">
                            Never spend your money before you’ve earned it
                        </p>

                       

                        <div className="flex gap-8 items-center mt-12">
                            <button
                                className='bg-primary transition-all duration-200 text-white-1 hover:bg-[#959595] hover:text-primary font-semibold text-base sm:text-xl md:text-2xl rounded-[80px] px-6 md:px-12 py-3 md:py-[18px]'
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



                    <div className="hidden flex-1 text-primary lg:flex flex-col gap-6 h-full justify-center items-center">
                        <p className="font-medium max-w-[286px] text-xl ">
                            By automating manual processes, expanding customer reach
                        </p>

                        <div className="flex gap-20 justify-between items-center">
                            <div className="flex flex-col gap-1">
                                {Array(5).fill().map((_, i) =>
                                    <img key={i} src={`/images/img-${i + 1}.png`} alt={`img_${i + 1}`} className="w-3/4" />
                                )}
                            </div>

                            <p className="font-medium max-w-[286px]  text-xl ">
                                Ensuring transparency and accountability in financial transactions
                            </p>
                        </div>

                        <p className="font-medium max-w-[286px]  text-xl ">
                            If you would be wealthy, think of saving as well as getting
                        </p>
                    </div>
                </div>
            </main>

            {/* SHOWS ONLY ON SCREENS LARGER THAN 1280PX */}
            <main className='hidden xl:flex '>
                <div className="pb-20 flex flex-col justify-center relative pl-4 sm:pl-6 md:pl-10 xl:pl-[100px] min-h-screen w-[65%] bg-header-bg bg-cover bg-no-repeat">
                    <div className="absolute top-[37px]">
                        <LogoIcon2 />
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
                                className='bg-primary transition-all duration-200 text-white-1 hover:bg-[#072a56] hover:textprimary font-semibold text-2xl rounded-[80px] px-12 py-[18px]'
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

                <div className="w-[35%] bg-primary pb-[255px] ">
                    <div className="flex justify-evenly items-center pt-[51px] pb-[46px]">
                        <a href='#' className="text-xl font-medium text-white-1">About</a>
                        <a href='#' className="text-xl font-medium text-white-1">Features</a>
                        <a href='#' className="text-xl font-medium text-white-1">Contact Us</a>
                    </div>

                    <div className="relative flex flex-col h-full justify-center items-center">
                        <img src="/images/curve-1.png" alt="curve-1" className="absolute top-36 right-28 2xl:right-40" />
                        <img src="/images/curve-2.png" alt="curve-2" className="absolute bottom-44 right-28 2xl:right-40" />

                        <p className="font-normal max-w-[286px] text-white-1 text-xl mb-12">
                            By automating manual processes, expanding customer reach
                        </p>

                        <div className="flex gap-20 justify-between items-center">
                            <div className="flex flex-col gap-2">
                                {Array(5).fill().map((_, i) =>
                                    <img key={i} src={`/images/img-${i + 1}.png`} alt={`img_${i + 1}`} className="" />
                                )}
                            </div>

                            <p className="font-normal max-w-[238px] text-white-1 text-xl mb-12">
                                Ensuring transparency and accountability in financial transactions
                            </p>
                        </div>

                        <p className="font-normal max-w-[238px] text-white-1 text-xl mt-10">
                            If you would be wealthy, think of saving as well as getting
                        </p>
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