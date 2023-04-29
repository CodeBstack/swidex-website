import React from 'react'
import WhatWeOfferCard from '../../components/WhatWeOfferCard'
import Image from 'next/image'

const WhatWeOfferSection = () => {

    return (
        <section id='section_2' className='min-h-screen w-full  md:px-10 xl:px-[100px] pb-[95px]'>
            <div className="px-4 sm:px-6">
                <div className="hidden -mt-[79px] font-Lato  translate-x-[0%] h-[158px] font-semibold text-[34px] xl:flex justify-center items-center w-full max-w-[987px] mx-auto rounded-[30px] bg-what-we-are-bringing-section bg-cover text-black">
                    What are we bringing to the table?
                </div>

                <p className="pt-7 font-Lato text-2xl sm:text-3xl font-semibold xl:hidden">
                    What are we bringing to the table?
                </p>

                <div className="mt-[60px] xl:mt-[169px] gap-10 grid grid-cols-1 md:grid-cols-2">
                    {staticData.map((data, i) =>
                        <WhatWeOfferCard
                            key={`${data.heading}_${i}`}
                            data={data}
                        />
                    )}
                </div>
            </div>


            <div className="relative bg-primary mt-[106px] md:rounded-[30px] px-4 sm:px-6 pt-6 flex flex-col-reverse 2xl:flex-row gap-16 2xl:gap-[92px] md:px-10 md:pt-10 xl:pt-[220px] 2xl:pt-0 xl:px-[108px] ">
                <img src="/images/bar-1.png" alt="bar" className="absolute top-0 left-0 hidden xl:block" />
                <img src="/images/bar-2.png" alt="bar" className="absolute top-0 left-0 hidden xl:block" />
                <img src="/images/bar-3.png" alt="bar" className="absolute top-0 left-0 hidden xl:block" />
                <img src="/images/bar-4.png" alt="bar" className="absolute top-0 left-0 hidden xl:block" />

                <div className="md:w-[425px] md:h-[579px] self-center 2xl:self-end">
                    <img className='w-full h-full' src='/images/mobile_app.png' alt='mobile_app' width={'100%'} height={'100%'} />
                </div>


                <div className="flex-1 2xl:pt-20 2xl:pb-12">
                    <h5 className="font-Lato font-semibold mb-8 md:mb-[44px] text-white-1 text-2xl md:text-[34px] text-left ">
                        As an agent, all you need to do is:
                    </h5>

                    <ul className="flex flex-col gap-6 md:gap-10 xl:gap-[60px]">
                        <li className="flex gap-4 font-normal text-base sm:text-xl md:text-2xl lg:text-[28px] text-white-1 md:gap-6">
                            <div className="flex justify-center items-center rounded-[15px] border border-white-1 p-2 px-4 h-fit w-fiit font-Lato md:p-4 md:px-6">
                                1
                            </div>

                            <p className="font-Open max-w-[690px]">
                                Invite their customers to download our mobile app and create an account
                            </p>
                        </li>
                        <li className="flex gap-4 font-normal text-base sm:text-xl md:text-2xl lg:text-[28px] text-white-1 md:gap-6">
                            <div className="flex justify-center items-center rounded-[15px] border border-white-1 p-2 px-4 h-fit w-fiit font-Lato md:p-4 md:px-6">
                                2
                            </div>

                            <p className="font-Open max-w-[690px]">
                                Once their account is created, customers can access their account dashboard
                            </p>
                        </li>
                        <li className="flex gap-4 font-normal text-base sm:text-xl md:text-2xl lg:text-[28px] text-white-1 md:gap-6">
                            <div className="flex justify-center items-center rounded-[15px] border border-white-1 p-2 px-4 h-fit w-fiit font-Lato md:p-4 md:px-6">
                                3
                            </div>

                            <p className="font-Open max-w-[690px]">
                                They can view their transaction history, savings and loan plans, and update their personal information
                            </p>
                        </li>
                        <li className="flex gap-4 font-normal text-base sm:text-xl md:text-2xl lg:text-[28px] text-white-1 md:gap-6">
                            <div className="flex justify-center items-center rounded-[15px] border border-white-1 p-2 px-4 h-fit w-fiit font-Lato md:p-4 md:px-6">
                                4
                            </div>

                            <p className="font-Open max-w-[690px]">
                                Customers can use our mobile app to make transactions, such as; <br />
                                <ul className="pl-6 lg:pl-10  my-2">
                                    <li className="list-disc">
                                        Depositing or withdrawing money from their account
                                    </li>
                                    <li className="list-disc py-2">
                                        Paying for loans
                                    </li>
                                    <li className="list-disc">
                                        Checking their account balance
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhatWeOfferSection


const staticData = [
    {
        heading: 'Access to financial services',
        text: 'Access to digital financial services, savings, loans, and insurance for customers.',
        imgUrl: '/images/financial-services-image.png',
    },
    {
        heading: 'Automated  transactions',
        text: 'User-friendly interface for efficient transactions, with auto-fill, reminders, and notifications.',
        imgUrl: '/images/automated-txn.png',
    },
    {
        heading: 'Transparency and accountability',
        text: 'Real-time alerts prevent financial crimes, inform agents and customers about transactions.',
        imgUrl: '/images/transparency.png',
    },
    {
        heading: 'A wider customer base',
        text: 'We provide digital platform for agents to expand customer base',
        imgUrl: '/images/wider-customer.png',
    },

]
