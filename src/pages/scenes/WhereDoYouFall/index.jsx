import React, { useState } from 'react'
import AjoAgents from './components/AjoAgents';
import AjoCustomers from './components/AjoCustomers';
import ArrowRightIcon from '../../../components/Vectors/ArrowRightIcon';

const WhereDoYouFallSection = () => {
    const [presentStep, setPresentStep] = useState(1);

    const stepComponents = {
        1: <AjoAgents />,
        2: <AjoCustomers />,
    }

    return (
        <section className=" text-black border-t border-grey-1 px-[100px] pb-20">
            <div className="flex justify-between items-center py-7">
                <p className="font-Lato text-[38px] font-semibold">Where do you fall?</p>

                <div className="tab w[559px] flex rounded-[100px] bg-[#E4E4E4] px-4 py-3">
                    {steps.map((value) =>
                        <button
                            key={value.id}
                            type='button'
                            onClick={() => setPresentStep(value.id)}
                            className='flex '
                        >
                            <span className={`transition-all duration-300 rounded-[80px] py-4 px-[85px] text-[28px] font-semibold ${presentStep === value.id ? 'bg-primary text-white-1' : 'text-[#959595]'}`}>
                                {value.title}
                            </span>
                        </button>
                    )}
                </div>
            </div>

            {stepComponents[presentStep]}


            <div className="mt-[212px] flex flex-col">
                <div className="flex gap-6 items-center mx-auto mb-[162px]">
                    <p className="font-Lato text-black font-semibold text-[34px]">
                        Would you like to start saving effortlessly today?
                    </p>
                    <button className='rounded-[80px] flex gap-2.5 items-center bg-primary py-4 px-[54px] text-2xl text-white'>Yes, I do! <ArrowRightIcon /></button>
                </div>

                <div className="flex gap-[200px]">
                    <div className="bg-[#C3E0FE] flex flex-col justify-center w-[831px] h-[564px] px-[84px] rounded-[30px]">
                        <p className="font-normal text-[42px] text-black mb-10">
                            <span className="font-bold">Download</span> {" "}
                            our <span className="font-bold">mobile app </span> {" "}
                            and start <span className="font-bold">saving</span> {" "} today<span className="font-bold">!</span>
                        </p>
                        <button
                            className='w-fit rounded-[80px] flex gap-2.5 items-center bg-primary py-5 px-[33px] text-[28px] text-white'
                        >
                            Get mobile app now
                        </button>
                    </div>

                    <div className="flex-1 w-425px] h-[550px] self-end">
                        <img className='w-[460px] h-full' src='/images/mobile_app_3.png' alt='mobile_app' width={'100%'} height={'100%'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhereDoYouFallSection;

const steps = [
    {
        id: 1,
        title: 'Agent'
    },
    {
        id: 2,
        title: 'Customer'
    }
]