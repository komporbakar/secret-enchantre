import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardProduct({...props}) {
  const {name, price, image, slug} = props
    
  return (
      <div className='w-1/2 px-2 lg:w-1/4 h-full mb-5 '>
            <Link href={`/product/${slug}`}>
              <Image src={`/images/${image}.jpg`} className='w-full' width={1000} height={3000} alt={name}/>
              <h2 className='mt-4 mb-1'>{name}</h2>
              <span className='font-bold'>Rp. {new Intl.NumberFormat('en-DE').format(price)}</span>
          </Link>
      </div>
  )
}
