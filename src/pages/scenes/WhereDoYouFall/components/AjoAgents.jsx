import React from 'react'

const AjoAgents = () => {
    return (
        <div className="flex flex-col-reverse gap-10 xl:flex-row xl:justify-between xl:items-center xl:pl-[90px] mt-6 md:mt-10 xl:mt-[107px]">
            <div className="flex-1 max-h-[579px] self-center xl:self-end">
                <img className='max-w-[460px] h-full' src='/images/mobile_app_2.png' alt='mobile_app' width={'100%'} height={'100%'} />
            </div>

            <p className="flex-1 xl:text-right font-Open text-xl md:text-2xl lg:text-[38px] font-normal max-w-[890px] leading-8 lg:leading-[62.85px]">
                <span className="font-bold">Ajoconnect agents</span>{" "}
                are typically individuals or small businesses that operate in underserved communities and provide financial services such as savings and loans to their customers. Our mobile app platform provides these agents with a more efficient and reliable way to manage their transactions and customer relationships.
            </p>
        </div>
    )
}

export default AjoAgents