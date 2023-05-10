import React from 'react'

const AjoAgents = () => {
    return (
        <div className="flex flex-col-reverse gap-10 xl:flex-row xl:justify-between xl:items-start xl:pl-[90px] mt-6 md:mt-10 xl:mt-[107px]">
            <div className="flex1 max-h-[579px] self-center xl:self-start">
                <img className='max-w-[350px] h-full' src='/images/mobile_app_2.png' alt='mobile_app' width={'100%'} height={'100%'} />
            </div>

            <p className="flex-1 xl:text-right font-Open text-base sm:text-xl max-w-[830px]  md:text-2xl xl:text-[38px] font-normal sm:leading-[40px] xl:leading-[62.85px]">
                <span className="font-bold">Ajoconnect Agents</span>{" "}
                are typically individuals or small businesses that operate in underserved communities and provide financial services such as savings and loans to their customers. Our mobile app platform provides these agents with a more efficient and reliable way to manage their transactions and customer relationships.
            </p>
        </div>
    )
}

export default AjoAgents