import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'

 const MainCheckout = () => {
    const router = useRouter()
    const alert = () => {
        toast.success('Success Checkout', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        router.push('/')
    } 
  return (
    <>
         <div className='lg:px-24 px-6'>
        <section id='Breadcumb'>
            <div className="flex flex-wrap justify-start my-7">
                <Link href="/" className='text-[#D0D5DD]'>Home</Link>
                <span className='mx-2'>/</span>
                <Link href="#" >Checkout</Link>
                <span className='mx-2'>/</span>
                <p className='text-[#D0D5DD]'>Payment</p>
            </div>
        </section>
        <section className='md:mb-48 mb-10'>
            <div className="flex flex-wrap">
                <div className="lg:w-3/4 w-full  ">
                    <div className="flex flex-col ">
                       <div className="flex flex-col shadow-lg border rounded-md px-6">
                       <h1 className='font-semibold text-xl my-5'>Select shipping country</h1>
                        <form action="">
                            <select id="small" class="block w-full p-2 mb-6 text-sm rounded-lg active:ring-blue-100 text-gray-900 border focus:border-slate-400 focus:ring-blue-500">
                                <option selected>Select country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                            <hr />
                            <div class="mb-6 mt-4">
                                <label for="email" class="block mb-2 text-sm font-medium">Full Name*</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required/>
                            </div> 
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium ">Email Address*</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required/>
                                </div>
                                <div>
                                    <label for="last_name" class="block mb-2 text-sm font-medium ">Confirmation Email*</label>
                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required/>
                                </div>
                            </div>
                            <div class="mb-6 mt-4">
                                <label for="email" class="block mb-2 text-sm font-medium">Phone Number*</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required/>
                            </div> 
                            <div class="mb-6 mt-4">
                                <label for="email" class="block mb-2 text-sm font-medium">Province*</label>
                                <select id="small" class="block w-full p-2 mb-6 text-sm rounded-lg active:ring-blue-100 text-gray-900 border focus:border-slate-400 focus:ring-blue-500">
                                    <option selected>Select Province</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div> 
                            <div class="mb-6 mt-4">
                                <label for="email" class="block mb-2 text-sm font-medium">City*</label>
                                <select id="small" class="block w-full p-2 mb-6 text-sm rounded-lg active:ring-blue-100 text-gray-900 border focus:border-slate-400 focus:ring-blue-500">
                                    <option selected>Select City</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div> 
                            <div class="mb-6 mt-4">
                                <label for="email" class="block mb-2 text-sm font-medium">Postal Code*</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required/>
                            </div> 
                        </form>
                       </div>
                       <div className="flex flex-col mt-10 shadow-lg border rounded-md px-6">
                       <h1 className='font-semibold text-xl my-5'>Select shipping country</h1>
                        <div className="flex justify-between border px-2 py-1 rounded-lg items-center mb-5">
                            <div className="flex items-center ">
                                <input type="radio" className='me-5'/>
                                <div className='flex flex-col'>
                                    <p className="font-semibold">Free Shipping</p>
                                    <p className='text-base font-light'>7 -30 Business day</p>
                                </div>
                            </div>
                            <h6>Rp. {new Intl.NumberFormat('en-DE').format(0)}</h6>
                        </div>
                        <div className="flex justify-between border px-2 py-1 rounded-lg items-center mb-5">
                            <div className="flex items-center ">
                                <input type="radio" className='me-5'/>
                                <div className='flex flex-col'>
                                    <p className="font-semibold">Regular shipping</p>
                                    <p className='text-base font-light'>7 -30 Business day</p>
                                </div>
                            </div>
                            <h6>Rp. {new Intl.NumberFormat('en-DE').format(20000)}</h6>
                        </div>
                        <div className="flex justify-between border px-2 py-1 rounded-lg items-center mb-5">
                            <div className="flex items-center ">
                                <input type="radio" className='me-5'/>
                                <div className='flex flex-col'>
                                    <p className="font-semibold">Free Shipping</p>
                                    <p className='text-base font-light'>7 -30 Business day</p>
                                </div>
                            </div>
                            <h6>Rp. {new Intl.NumberFormat('en-DE').format(46000)}</h6>
                        </div>
                       </div>
                    </div>
                </div>
                <div className="lg:w-1/4 w-full mt-5 lg:mt-0 ">
                <div className="rounded-md shadow-lg lg:ms-3 border ">
                    <h5 className='font-bold text-lg my-3 px-6'>Your Order</h5>
                    <div className="flex items-center my-3 px-6">
                        <Image src={'/images/detailImg.jpg'} className='w-20 me-5' width={100} height={100} alt='imgcart'/>
                        <div className="flex flex-col">
                            <h1>Enchanté Linen Shirt Yellow</h1>
                            <p>L</p>
                            <p>x1</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between px-6 mt-10 items-center mb-2">
                        <p className='text-base'>Subtotal</p>
                        <p className='text-base'>Rp.50000</p>
                    </div>
                    <div className="flex justify-between px-6 items-center mb-4">
                        <p className='text-base'>Discount</p>
                        <p className='text-base'>Rp.4000</p>
                    </div>
                    <div className="flex justify-between px-6 items-center mb-4">
                        <p className='text-base'>Shipment Cost</p>
                        <p className='text-base'>Rp.0</p>
                    </div>
                    <hr />
                    <div className="flex flex-wrap justify-between px-6 my-5">
                        <h6 className='text-lg font-semibold'>Grand Total</h6>
                        <h6>Rp. {new Intl.NumberFormat('en-DE').format(200000)}</h6>
                    </div>
                    <div className="px-6 mb-4">
                        <button onClick={alert} className="bg-black rounded-lg flex w-full justify-center py-3 text-white "><p className='text-center'>Continue to Payment</p></button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default MainCheckout
