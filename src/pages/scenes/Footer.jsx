import React from 'react'
import LogoIcon2 from '../../components/Vectors/LogoIcon2'

const Footer = () => {
    return (
        <section className="px-[100px] py-[62px] flex justify-between">
            <div className="flex-1 flex gap-[53px]">
                <LogoIcon2 />
                <p className="flex-1 max-w-[387px] font-Open text-2xl text-black font-normal">
                    We serve as a bridge between Ajo agents and their customers, providing a digital platform for managing financial transactions and promoting financial inclusion in underserved communities
                </p>
            </div>
            <div className="flex-1 flex justify-between">
                <div className="flex flex-col text-black">
                    <p className="title font-Lato text-[28px] font-bold mb-[42px]">About Us</p>
                    <div className="flex flex-col gap-6 font-Open font-normal text-2xl text-right">
                        <a href='#'>Our Team</a>
                        <a href='#'>Careers</a>
                        <a href='#'>Contact Us</a>
                    </div>
                </div>
                <div className="flex flex-col text-black">
                    <p className="title font-Lato text-[28px] font-bold mb-[42px]">Resources</p>
                    <div className="flex flex-col gap-6 font-Open font-normal text-2xl text-right">
                        <a href='#'>FAQS</a>
                        <a href='#'>Privacy</a>
                        <a href='#'>Help</a>
                    </div>
                </div>
                <div className="flex flex-col text-black">
                    <p className="title font-Lato text-[28px] font-bold mb-[42px]">Legal</p>
                    <div className="flex flex-col gap-6 font-Open font-normal text-2xl text-right">
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