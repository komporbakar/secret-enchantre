import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



const MainProduct = ({ data }) => {
    const [jumlah, setjumlah] = useState(1)
    const [harga, setHarga] = useState(data?.price ?? 0)
    
    const tambah = () =>{
        jumlah < 1  ?
         setjumlah(jumlah) : setjumlah(jumlah + 1)
    }
    console.log(jumlah)

    const kurangg = () =>{
        jumlah <= 1  ?
         setjumlah(jumlah) : setjumlah(jumlah - 1)
    }

    useEffect(() => {
        if (data && data.price) {
            setHarga(jumlah * data.price);
        }
    }, [jumlah, data])

    if (!data) {
        return <p>Loading...</p>;
    }

  return (
    <div className='lg:px-24 px-6'>
        <section id='Breadcumb'>
            <div className="flex flex-wrap justify-start my-7">
                <Link href="/" className='text-[#D0D5DD]'>Home</Link>
                <span className='mx-2'>/</span>
                <Link href="#" className='text-[#D0D5DD]'>Women</Link>
                <span className='mx-2'>/</span>
                <p>{data?.name}</p>
            </div>
        </section>
        <section className='md:mb-48 mb-10'>
            <div className="flex flex-wrap">
                <div className="lg:w-3/4 w-full  shadow-lg border rounded-md">
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/3 w-full">
                            <div className="flex flex-col">
                                <div className="">
                                <Image src={`/images/${data.image}.jpg`} alt='Detail Img' className='w-full' width={400} height={300}/>
                                </div>
                                <div className="w-1/4 mt-2">
                                    <div className="flex flex-row  justify-between">
                                    <Image src={`/images/${data.image}.jpg`} alt='Detail Img' className='h-full px-1 rounded-lg ' width={400} height={300}/>     
                                    <Image src={`/images/${data.image}.jpg`} alt='Detail Img' className='h-full px-1 rounded-lg' width={400} height={300}/>     
                                    <Image src={`/images/${data.image}.jpg`} alt='Detail Img' className='h-full px-1 rounded-lg' width={400} height={300}/>     
                                    <Image src={`/images/${data.image}.jpg`} alt='Detail Img' className='h-full px-1 rounded-lg' width={400} height={300}/>     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3 w-full ps-5">
                            <h1 className='mt-8 text-4xl'>{data.name}</h1>
                            <h1 className='mt-4 lg:mb-20 mb-5 font-semibold text-4xl'>Rp. {new Intl.NumberFormat('en-DE').format(data.price)}</h1>
                            <div className="flex flex-wrap items-center lg:space-x-4">
                                <div className="w-fit me-3">
                                    <div className="bg-[#E4E4E4] px-2 py-3 flex space-x-2 rounded-lg">
                                        <div className="bg-white py-1 px-4 rounded-lg">S</div>
                                        <div className="bg-white py-1 px-4 rounded-lg">M</div>
                                        <div className="bg-black text-white py-1 px-4 rounded-lg">L</div>
                                        <div className="bg-white py-1 px-4 rounded-lg">XL</div>
                                    </div>
                                </div>
                                <div className="w-auto  bg-[#F4E8E9] rounded-full py-2 lg:px-7 px-2 mt-2 lg:mt-0">
                                    <span className='text-[#8E1B20] flex flex-nowrap font-semibold text-base'>Remaining stock 5!</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center mt-9 items-center">
                                <div className="w-1/2 text-center border border-black py-2 rounded-lg">
                                    <span>Description</span>
                                </div>
                                <div className="w-1/2 text-center py-2">
                                    <span>Size Chart</span>
                                </div>
                                <div className="w-full mt-6 pe-3">
                                    <span className='font-light text-base'>{data.deskripsi}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4 w-full mt-5 lg:mt-0 ">
                    <div className="rounded-md shadow-lg lg:ms-3 border">
                        <h4 className="px-6 py-6 font-semibold">Arrange your order</h4>
                        <hr />
                        <div className="flex justify-between px-6 mt-6 items-center mb-4">
                            <p className='text-sm'>Product Quantity</p>
                            <div className=" w-1/2 flex flex-nowrap items-center justify-between rounded-md bg-gray-300 px-3 py-2 ">
                                <button onClick={kurangg} className='bg-white rounded-md  px-3'>-</button>
                                <h1>{jumlah}</h1>
                                <button onClick={tambah} className='bg-white rounded-md px-3'>+</button>
                                {/* <h1>12</h1> */}
                            </div>
                        </div>
                        <div className="w-full px-6 mb-8">
                            <input type="text" className=' w-full rounded-lg
                             py-2 px-2 bg-[#F7F7F7] text-[#8E98A8] text-sm' placeholder='Add special instructions...' />
                        </div>
                        <div className="w-full px-6 mb-8">
                            <span className=' w-full rounded-lg
                             py-2 px-2 bg-[#F4E8E9] text-[#8E1B20] text-xs flex flex-wrap text-center'>Ongkos kirim di hitung saat proses pembayaran</span>
                        </div>
                        <hr />
                        <div className="flex flex-wrap justify-between px-6 my-5">
                            <h6>Subtotal Estimate</h6>
                            <h6>Rp. {new Intl.NumberFormat('en-DE').format(harga)}</h6>
                        </div>
                        <div className="px-6 mb-4">
                            <Link href='/cart' className="bg-black rounded-lg flex justify-center py-3 text-white "><p className='text-center'>Add to Cart</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}



export default MainProduct

