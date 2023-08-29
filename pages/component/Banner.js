import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='md:mb-20'>
        <Image src='/images/banner.jpg' className='w-full' width={1000} height={500} alt='img Banner'></Image>
    </div>
  )
}
