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
        <section className=" text-black pb-10 border-t border-grey-1 px-4 sm:px-6 md:px-10 xl:px-[100px] xl:pb-20">
            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center py-4 md:py-7">
                <h4 className="font-Lato text-2xl lg:text-[38px] font-semibold">Where do you fall?</h4>

                <div className="self-end tab w-fit flex rounded-[50px] lg:rounded-[100px] bg-[#E4E4E4] px-2 py-1.5 lg:px-4 lg:py-3 ">
                    {steps.map((value) =>
                        <button
                            key={value.id}
                            type='button'
                            onClick={() => setPresentStep(value.id)}
                            className='flex '
                        >
                            <span className={`font-Lato transition-all duration-300 rounded-[40px] lg:rounded-[80px] py-2 px-6 md:px-10 lg:py-4 lg:px-[85px] text-xl md:text-2xl lg:text-[28px] font-semibold ${presentStep === value.id ? 'bg-primary text-white-1' : 'text-[#959595]'}`}>
                                {value.title}
                            </span>
                        </button>
                    )}
                </div>
            </div>

            {stepComponents[presentStep]}


            <div className="mt-[100px] xl:mt-[212px] flex flex-col">
                <div className="flex flex-col lg:flex-row gap-6 items-center mx-auto mb-10 lg:mb-[162px]">
                    <p className="font-Lato text-black font-semibold text-xl md:text-2xl xl:text-[34px]">
                        Would you like to start saving effortlessly today?
                    </p>
                    <button className='transition-all duration-200 self-end rounded-[40px] lg:rounded-[80px] flex gap-2.5 items-center bg-primary hover:bg-[#072a56] hover:textprimary py-2 lg:py-4 px-6 lg:px-[54px] text-base lg:text-2xl text-white'>
                        Yes, I do! <ArrowRightIcon />
                    </button>
                </div>

                <div className="flex-1 flex flex-col xl:flex-row gap-16 xl:gap-36 2xl:gap-[200px]">
                    <div className="bg-download-bg bg-cover self-center flex flex-col justify-center max-w-[700px] 2xl:max-w-[831px] h-[380px] lg:h-[564px] p-6 sm:p-10 md:p-16 xl:px-[84px] rounded-2xl md:rounded-[30px]">
                        <h3 className="font-normal text-2xl md:text-3xl lg:text-[42px] text-black mb-10">
                            <span className="font-bold">Download</span> {" "}
                            our <span className="font-bold">mobile app </span> {" "}
                            and start <span className="font-bold">saving</span> {" "} today<span className="font-bold">!</span>
                        </h3>
                        <button
                            className='transition-all duration-200 w-fit rounded-[80px] flex gap-2.5 items-center bg-primary py-2.5 lg:py-5 px-7 lg:px-[33px] text-base md:text-xl mdtext-2xl lg:text-[28px] text-white hover:bg-[#072a56] hover:textprimary'
                        >
                            Get mobile app now
                        </button>
                    </div>

                    <div className="flex1 max-h-[550px] self-center xl:self-end">
                        <img className='max-w-[460px] h-full' src='/images/mobile_app_3.png' alt='mobile_app' width={'100%'} height={'100%'} />
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