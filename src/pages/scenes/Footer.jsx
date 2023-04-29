import React from 'react'
import LogoIcon from '../../components/Vectors/LogoIcon'
import LogoIcon2 from '../../components/Vectors/LogoIcon2'

const Footer = () => {
    return (
        <section className="px-4 sm:px-6 md:px-10 xl:px-[100px] py-10 gap-10 flex flex-col xl:flex-row xl:justify-between lg:py-[62px]">
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-[53px] ">
                <div className="xl:hidden">
                    <LogoIcon />
                </div>

                <div className="hidden xl:block">
                    <LogoIcon2 />
                </div>

                <p className="flex-1 max-w-[387px] font-Open text-xl md:text-2xl text-black font-normal">
                    We serve as a bridge between Ajo agents and their customers, providing a digital platform for managing financial transactions and promoting financial inclusion in underserved communities
                </p>
            </div>
            <div className="flex-1 flex flex-wrap items-center gap-14 md:flex-row md:justify-between max-w-[800px]">
                <div className="flex flex-col text-black">
                    <p className="title font-Lato text-xl md:text-2xl lg:text-[28px] font-bold mb-6 lg:mb-[42px]">About Us</p>
                    <div className="flex flex-col gap-4 lg:gap-6 font-Open font-normal text-base md:text-xl lg:text-2xl md:text-right">
                        <a href='#'>Our Team</a>
                        <a href='#'>Careers</a>
                        <a href='#'>Contact Us</a>
                    </div>
                </div>
                <div className="flex flex-col text-black">
                    <p className="title font-Lato text-xl md:text-2xl lg:text-[28px] font-bold mb-6 lg:mb-[42px]">Resources</p>
                    <div className="flex flex-col gap-4 lg:gap-6 font-Open font-normal text-base md:text-xl lg:text-2xl md:text-right">
                        <a href='#'>FAQS</a>
                        <a href='#'>Privacy</a>
                        <a href='#'>Help</a>
                    </div>
                </div>
                <div className="flex flex-col text-black">
                    <p className="title font-Lato text-xl md:text-2xl lg:text-[28px] font-bold mb-6 lg:mb-[42px]">Legal</p>
                    <div className="flex flex-col gap-4 lg:gap-6 font-Open font-normal text-base md:text-xl lg:text-2xl md:text-right">
                        <a href='#'>Terms</a>
                        <a href='#'>Privacy</a>
                        <a href='#'>Security</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer