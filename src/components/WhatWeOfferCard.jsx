import Image from 'next/image'
import React from 'react'


const WhatWeOfferCard = ({ data = {} }) => {
    return (
        <div className='card_area p-6 sm:min-h-[400px] rounded-[30px] flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center'>
            <div className=" text-black self-center w-full sm:max-w-[293px]">
                <h4 className="font-bold font-Lato mb-4 sm:mb-6 text-2xl  md:text-[34px]">{data.heading}</h4>
                <p className="font-Open font-normal text-base md:text-xl">{data.text}</p>
            </div>

            <div className="self-center">
                <img src={data.imgUrl} alt={data.heading} />
            </div>
        </div>
    )
}


export default WhatWeOfferCard