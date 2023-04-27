import Image from 'next/image'
import React from 'react'


const WhatWeOfferCard = ({ data = {} }) => {
    return (
        <div className='card_area px-6 min-h-[400px] rounded-[30px] flex justify-between items-center'>
            <div className=" text-black w-full max-w-[293px]">
                <h4 className="font-bold font-Lato mb-6 text-[34px]">{data.heading}</h4>
                <p className="font-Open font-normal text-xl">{data.text}</p>
            </div>

            <div className="">
                <img src={data.imgUrl} alt={data.text} />
            </div>
        </div>
    )
}


export default WhatWeOfferCard