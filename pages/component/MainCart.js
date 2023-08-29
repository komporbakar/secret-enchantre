import Image from 'next/image'
import React from 'react'
import ListCart from './atoms/ListCart'
import Link from 'next/link'

export default function MainCart() {
  return (
    <div className='lg:px-24 px-6'>
    <section id='Breadcumb'>
        <div className="hidden lg:flex flex-wrap justify-between w-3/4 px-4 mb-3">
            <h1 className="text-lg">Cart</h1>
            <div className="flex flex-nowrap space-x-3 mt-1">
                <Image src={'/trash.svg'} alt='icon trsh' width={24} height={24}/>
                <h6>Remove</h6>
            </div>
        </div>
    </section>
    <section className='md:mb-48 mb-10'>
        <div className="flex flex-wrap">
            <div className="lg:w-3/4 w-full  shadow-lg border rounded-md">
                <div className=" px-4 py-2 ">
                    <div id='Thead' className=" flex-wrap hidden lg:flex  text-[#5A5A5A]">
                        <div className="lg:w-1/12 w-full flex justify-center ">
                            <input type="checkbox" className=''/>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <h1>Product</h1>
                        </div>
                        <div className="lg:w-1/4 w-full">
                            <h1 className='ms-6'>Quantity</h1>
                        </div>
                        <div className="lg:w-1/6 w-full">
                            <h1>Price</h1>
                        </div>
                    </div>
                    <hr className='my-5' />
                    
                        <ListCart/>
                        <ListCart/>
                        <ListCart/>
                        <ListCart/>
                    {/* </div> */}
                </div>
            </div>
            <div className="lg:w-1/4 w-full mt-5 lg:mt-0 ">
                <div className="rounded-md shadow-lg lg:ms-3 border">
                    <div className="flex justify-between px-6 mt-10 items-center mb-2">
                        <p className='text-base'>Subtotal</p>
                        <p className='text-base'>Rp.50000</p>
                    </div>
                    <div className="flex justify-between px-6 items-center mb-4">
                        <p className='text-base'>Discount</p>
                        <p className='text-base'>Rp.4000</p>
                    </div>
                    <hr />
                    <div className="flex flex-wrap justify-between px-6 my-5">
                        <h6 className='text-lg font-semibold'>Grand Total</h6>
                        <h6>Rp. {new Intl.NumberFormat('en-DE').format(200000)}</h6>
                    </div>
                    <div className="px-6 mb-4">
                        <Link href='/checkout' className="bg-black rounded-lg flex justify-center py-3 text-white "><p className='text-center'>Checkout Now</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}
