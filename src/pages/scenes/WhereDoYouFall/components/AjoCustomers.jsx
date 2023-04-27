import React from 'react'

const AjoCustomers = () => {
    return (
        <div className="flex justify-between items-center pl-[90px] mt-[107px]">
            <div className="flex-1 w-425px] h-[579px] self-end">
                <img className='w-[460px] h-full' src='/images/mobile_app_2.png' alt='mobile_app' width={'100%'} height={'100%'} />
            </div>

            <p className="flex-1 text-right font-Open text-[38px] font-normal  max-w-[890px] leading-[62.85px]">
                <span className="font-bold">Ajoconnect Customers</span>{" "}
                are typically individuals or small businesses that operate in underserved communities and provide financial services such as savings and loans to their customers. Our mobile app platform provides these agents with a more efficient and reliable way to manage their transactions and customer relationships.
            </p>
        </div>
    )
}

export default AjoCustomers