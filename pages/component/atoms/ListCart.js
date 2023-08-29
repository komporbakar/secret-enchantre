import Image from 'next/image'
import React from 'react'

export default function ListCart() {
  return (
    <>
    <div id='Tbody' className="flex flex-wrap items-center mb-5">
        <div className="w-1/12  justify-center hidden lg:flex">
            <input type="checkbox" className=''/>
        </div>
        <div className="lg:w-1/2 w-full">
            <div className="flex items-center">
                <Image src={'/images/detailImg.jpg'} className='w-20 me-5' width={100} height={100} alt='imgcart'/>
                <div className="flex flex-col">
                    <h1>Enchanté Linen Shirt Yellow</h1>
                    <p>L</p>
                </div>
            </div>
        </div>
        <div className="lg:w-1/4 w-full hidden lg:flex">
            <div className="flex flex-col justify-center">
                <div className=" w-auto flex flex-nowrap items-center justify-between rounded-md bg-gray-300 px-3 py-2 ">
                    <button  className='bg-white rounded-md  px-3'>-</button>
                    <h1 className='mx-2'>1</h1>
                    <button  className='bg-white rounded-md px-3'>+</button>
                    {/* <h1>12</h1> */}
                </div>
                <div className="flex flex-nowrap space-x-3 mt-1">
                    <Image src={'/trash.svg'} alt='icon trsh' width={24} height={24}/>
                    <h6>Remove</h6>
                </div>
            </div>

        </div>
        <div className="md:w-1/6 w-full text-center lg:text-start">
            <h1>Rp. {new Intl.NumberFormat('en-DE').format(200000)}</h1>
        </div>
    </div>
    </>
  )
}
