import Image from 'next/image'
import React, { useState } from 'react'
import MenuNavbar from './atoms/MenuNavbar'


const Navbars = () => {
  // const [dropdown, setDropdown] = useState(false)

  // const onDropdown  = () =>{
  //   setDropdown(!dropdown)
  // }


  return (
    <nav className="px-6 md:px-0">
      <section className="flex flex-row justify-between items-center py-3 md:px-24 md:border-b-4 md:border-black ">
        <div className='md:w-1/3'>
          <Image src='/navbar.svg' alt='icon navbar' className='lg:hidden' width={20} height={20}/>
          <h5 className="hidden lg:flex">ENG <Image className='ms-1' src='/dropdown.svg' alt='icon person' width={12} height={6}/></h5>
        </div>
        <h1 className="text-2xl ms-5 md:w-1/3 text-center">Secret Enchante</h1>
        <div className='flex space-x-2 md:hidden'>
          <Image src='/person.svg' alt='icon person' width={24} height={24}/>
          <Image src='/cart.svg' alt='icon cart' width={24} height={24}/>
        </div>
        <div className=' space-x-2 hidden md:flex justify-end md:w-1/3'>
        <Image src='/person.svg' alt='icon person' width={24} height={24}/>
        <h5 className=''>Sign In</h5>
        </div>
      </section>
      <section className=" flex-row justify-between items-center py-3 md:px-24 hidden lg:flex ">
        <div className='relative w-1/3'>
          <input type="text" placeholder="T-Shirt Hoodie..." className="px-7 border rounded-md py-1" />
          <Image src='/search.svg' alt='icon cart' width={20} height={20} className='absolute top-2 left-1'/>
        </div>
        <div className="flex justify-center w-1/3">
          <ul className="flex justify-between space-x-5 font-normal relative ">
            <MenuNavbar name='Men'/>
            <MenuNavbar name='Women'/>
            <MenuNavbar name='Baby'/>
            <MenuNavbar name='Kids'/>
            <MenuNavbar name='Sport'/>
          </ul>
        </div>
        <div className='flex space-x-2 w-1/3 justify-end'>
        <Image src='/cart-lg.svg' alt='icon cart' width={24} height={24}/>
        <h5>Cart (0)</h5>
        </div>
      </section>
    </nav>
    
  )
}

export default Navbars
