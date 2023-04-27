import React from 'react'
import LogoIcon from "../../components/Vectors/LogoIcon";
import ScrollDownIcon from '../../components/Vectors/ScrollDownIcon';

const HeroSection = () => {
    return (
        <main className='flex '>
            <div className="flex flex-col justify-center relative pl-[100px] h-screen w-[65%] bg-header-bg bg-cover bg-no-repeat">
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
    )
}

export default HeroSection