import React from 'react'
import WhatWeOfferCard from '../../components/WhatWeOfferCard'
import Image from 'next/image'

const WhatWeOfferSection = () => {

    return (
        <section id='section_2' className='min-h-screen w-full px-[100px] pb-[95px]'>
            <div className="-mt-[79px] font-Lato  translate-x-[0%] h-[158px] font-semibold text-[34px]  flex justify-center items-center w-full max-w-[987px] mx-auto rounded-[30px] bg-what-we-are-bringing-section bg-cover text-black">
                What are we bringing to the table?
            </div>

            <div className="mt-[169px] gap-10 grid grid-cols-2">
                {staticData.map((data, i) =>
                    <WhatWeOfferCard
                        key={`${data.heading}_${i}`}
                        data={data}
                    />
                )}
            </div>


            <div className="bg-primary mt-[106px] rounded-[30px] px-[108px] flex gap-[92px]">
                <div className="w-[425px] h-[579px] self-end">
                    <img className='w-full h-full' src='/images/mobile_app.png' alt='mobile_app' width={'100%'} height={'100%'} />
                </div>


                <div className="flex-1 pt-20 pb-12">
                    <h5 className="font-Lato font-semibold mb-[44px] text-white-1 text-[34px] text-left ">As an agent, all you need to do is:</h5>

                    <ul className="flex flex-col gap-[60px]">
                        <li className="flex  gap-6 items-centr font-normal text-[28px] text-white-1">
                            <div className="flex justify-center items-center rounded-[15px] border border-white-1 w-20 h-[71.11px] font-Lato ">
                                1
                            </div>

                            <p className="font-Open max-w-[690px]">
                                Invite their customers to download our mobile app and create an account
                            </p>
                        </li>
                        <li className="flex gap-6 items-cente font-normal text-[28px] text-white-1">
                            <div className="flex justify-center items-center rounded-[15px] border border-white-1 w-20 h-[71.11px] font-Lato ">
                                2
                            </div>

                            <p className="font-Open max-w-[690px]">
                                Once their account is created, customers can access their account dashboard
                            </p>
                        </li>
                        <li className="flex gap-6 items-cente font-normal text-[28px] text-white-1">
                            <div className="flex justify-center items-center rounded-[15px] border border-white-1 w-20 h-[71.11px] font-Lato ">
                                3
                            </div>

                            <p className="font-Open max-w-[690px]">
                                They can view their transaction history, savings and loan plans, and update their personal information
                            </p>
                        </li>
                        <li className="flex gap-6 items-cente font-normal text-[28px] text-white-1">
                            <div className="flex justify-center items-center rounded-[15px] border border-white-1 w-20 h-[71.11px] font-Lato ">
                                4
                            </div>

                            <p className="font-Open max-w-[690px]">
                                Customers can use our mobile app to make transactions, such as; <br />
                                <ul className="pl-10  my-2">
                                    <li className="list-disc">
                                        Depositing or withdrawing money from their account
                                    </li>
                                    <li className="list-disc">
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
