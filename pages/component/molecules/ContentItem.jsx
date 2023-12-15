import Image from 'next/image'
import React from 'react'

export default function ContentItem({...props}) {
    const {image, title, description} = props
  return (
    <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 justify-start mb-10 md:px-2">
        <div className="w-12 h-12 bg-[#F2F4F7] flex items-center mb-6">
            <Image src={`${image}.svg`} alt={`icon ${title}`} width={24} height={24} className='mx-auto my-auto'/>
        </div>    
        <h3 className="text-2xl mb-3">{title}</h3>
        <p className="text-base">{description}</p>
    </div>   
  )
}
