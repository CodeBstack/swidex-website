import React from 'react'

const AjoCustomers = () => {
    return (
        <div className="flex flex-col-reverse gap-10 xl:flex-row xl:justify-between xl:items-start xl:pl-[90px] mt-6 md:mt-10 xl:mt-[107px]">
            <div className="flex1 max-h-[579px] self-center xl:self-start">
                <img className='max-w-[350px] h-full' src='/images/mobile_app_2.png' alt='mobile_app' width={'100%'} height={'100%'} />
            </div>

            <p className="flex-1 xl:text-right font-Open text-base sm:text-xl max-w-[830px]  md:text-2xl xl:text-[38px] font-normal sm:leading-[40px] xl:leading-[62.85px]">
                <span className="font-bold">Ajoconnect Customers</span>{" "}
                are typically  individuals who may not have access to formal banking services or have limited financial literacy. They rely on Ajo agents to help them save money, borrow loans, and manage their finances. Our mobile app platform can provide these customers with a more convenient and secure way to access financial services, with features such as mobile payments, savings plans, and loan approvals.
            </p>
        </div >
    )
}

export default AjoCustomers