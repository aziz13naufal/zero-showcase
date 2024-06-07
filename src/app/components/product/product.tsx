"use client"
import React from 'react'
import Link from 'next/link'
// types
import { products } from '@/utils/products'
import { ProductType } from '@/types/product-type'

// components
import { Carousel } from 'antd'
import { Image } from 'antd';


const Product = ({ title, description, price, color, links, images }: ProductType) => {
    return (
        <div className='w-full h-screen flex flex-col sm:flex-row'>
            {/* product image */}
            <div className="w-full sm:w-[50%] h-full bg-[#ece8e2]">
                <Carousel arrows infinite={false}>
                    {images?.map((item: any, index: any) => (
                        <div key={index}>
                            {/* <Image src={item} className="w-full object-contain sm:h-dvh text-white flex items-center justify-center bg-black/20" /> */}
                            <h3 className="w-full h-fit sm:h-dvh text-white flex items-center justify-center bg-black/20">
                                <Image src={item} className="" />
                            </h3>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* product detail */}
            <div className="w-full sm:w-[50%] h-full flex flex-col justify-center p-7 sm:p-10 gap-4">
                {/* title */}
                <h1 className='text-2xl font-medium'>{title}</h1>

                {/* description */}
                {description?.map((item: any, index: any) => (
                    <p className='text-sm text-zinc-500' key={index}>{item}</p>
                ))}

                {/* price */}
                <span className='text-3xl font-semibold text-red-700'>Rp {price}</span>

                {/* color */}
                <div className='flex flex-col items-start gap-3 mt-[3vh]'>
                    <h1 className='text-xl font-medium'>Warna</h1>

                    <div className="flex flex-col items-center w-fit h-fit">
                        <div className="p-2 border-2 rounded-full w-fit h-fit">
                            <div className={`w-5 h-5 bg-white rounded-full drop-shadow bg-[${color?.hex}]`}></div>
                        </div>

                        <span className='text-sm text-zinc-500'>{color?.name}</span>
                    </div>
                </div>

                {/* link */}
                <div className="flex flex-col gap-4">
                    <h1 className='text-xl font-medium mt-[3vh]'>Link Pembelian</h1>

                    {links?.map((item: any, index: any) => (
                        <Link href={item?.url} className='border rounded-md px-3 py-2 w-fit bg-[#67451f]/20 hover:bg-[#67451f]/40 hover:scale-[1.02] transition' key={index}>
                            {item?.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product
