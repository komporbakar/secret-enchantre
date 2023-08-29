import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white'>
        <div className="xl:px-64 lg:px-44 px-6 lg:pt-16 pt-5 lg:pb-12 pb-6">
            <div className="flex flex-wrap flex-row justify-between mb-16  md:text-start">
                <div className="md:w-1/3  w-full font-light pe-2 mb-4">
                    <h4 className='text-3xl md:mb-8'>Secret Enchanté</h4>
                    <p>Selection of quality clothing with soft and comfortable materials for everyday style.</p>
                </div>
                <div className="md:w-1/6  w-full font-light mb-4">
                    <h4 className='text-xl md:mb-4 '>Help</h4>
                    <p>Exchange & Returns</p>
                    <p>Payment Information</p>
                    <p>Track Your Order</p>
                    <p>FAQs</p>
                </div>
                <div className="md:w-1/6  w-full font-light mb-4">
                    <h4 className='text-xl md:mb-4'>Business</h4>
                    <p>About Us</p>
                    <p>Pop-up Store</p>
                    <p>Career</p>
                </div>
                <div className="lg:w-1/4 md:w-1/3  w-full font-light mb-4">
                    <h4 className='text-xl md:mb-4 mb-2'>Stay up to date</h4>
                    <div className="flex flex-wrap md:justify-between">
                        <form action="" className='flex lg:flex-nowrap flex-wrap md:space-x-0 space-x-2 lg:space-x-2 justify-between'>
                            <div className="w-auto mb-2">
                                <input type="text" className='px-2 py-2 rounded-lg' placeholder='Enter your Email' />
                            </div>
                            <div className="lg:w-1/3 w-auto">
                                <button className='bg-[#EC6200] px-2 py-2  w-full rounded-lg '>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='border-white border'/>
            <div className="mt-8 flex flex-col md:flex-row justify-between">
                <h6>&copy; 2023 Secret Enchanté. All rights reserved.</h6>
                <div className='flex space-x-3'>
                    <h6>Terms</h6>
                    <h6>Privacy</h6>
                    <h6>Cookies</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
