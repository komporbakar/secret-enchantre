import Image from 'next/image'
import React from 'react'

export default function MenuNavbar({name}) {
  return (
    <li className='font-light'>
        <button  className='flex items-center'>{name}  <Image className='ms-1' src='/dropdown.svg' alt='icon person' width={12} height={6}/></button>
    </li>
  )
}
