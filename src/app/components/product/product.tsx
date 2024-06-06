import React from 'react'
import { Carousel } from 'antd'

// const contentStyle: React.CSSProperties = {
//     margin: '0',
//     width: '100%',
//     height: '100dvh',
//     color: '#fff',
//     lineHeight: '100dvh',
//     textAlign: 'center',
//     background: '#364d79',
// };

const contentStyle = "m-0 w-full h-dvh text-white text-center bg-blue-500"


const Product = () => {
    return (
        <div className='w-full h-screen flex flex-col md:flex-row'>
            {/* product image */}
            <div className="w-full md:w-[50%] h-full bg-[#ece8e2]">
                <Carousel arrows infinite={false}>
                    <div>
                        <h3 className="w-full h-[500px] md:h-dvh text-white flex items-center justify-center bg-black/20">1</h3>
                    </div>
                    <div>
                        <h3 className="w-full h-[500px] md:h-dvh text-white flex items-center justify-center bg-black/20">2</h3>
                    </div>
                    <div>
                        <h3 className="w-full h-[500px] md:h-dvh text-white flex items-center justify-center bg-black/20">3</h3>
                    </div>
                    <div>
                        <h3 className="w-full h-[500px] md:h-dvh text-white flex items-center justify-center bg-black/20">4</h3>
                    </div>
                </Carousel>
            </div>

            {/* product detail */}
            <div className="w-full md:w-[50%] h-full flex flex-col justify-center p-7 md:p-10 gap-4">
                {/* title */}
                <h1 className='text-2xl font-medium'>Google Pixel 3a</h1>

                {/* description */}
                <p className='text-sm text-zinc-500'>Halo, saya Aziz Naufal. Pengen jual hp GOPIX 3a dengan spek berikut</p>
                <p className='text-sm text-zinc-500'>Android 9.0 (Pie), Snapdragon 670, RAM 4GB, ROM 64GB, IMEI Rewrite, Body 85%, Baterai Aman</p>

                {/* price */}
                <span className='text-3xl font-semibold text-red-700'>Rp 1.000.000</span>

                {/* color */}
                <div className='flex flex-col items-start gap-3 mt-[3vh]'>
                    <h1 className='text-xl font-medium'>Warna</h1>

                    <div className="flex flex-col items-center w-fit h-fit">
                        <div className="p-2 border-2 rounded-full w-fit h-fit">
                            <div className="w-5 h-5 bg-white rounded-full drop-shadow"></div>
                        </div>

                        <span className='text-sm text-zinc-500'>Putih</span>
                    </div>
                </div>

                {/* link */}
                <div className="flex flex-col gap-4">
                    <h1 className='text-xl font-medium mt-[3vh]'>Link Pembelian</h1>

                    <button className='border rounded-md px-3 py-2 w-fit bg-[#67451f]/20 hover:bg-[#67451f]/40 hover:scale-[1.02] transition'>
                        <img src='/images/shopee.png' className='h-5' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
