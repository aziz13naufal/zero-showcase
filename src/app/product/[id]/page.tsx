'use client'
import React, { useEffect } from 'react'
import { products } from '@/utils/products'
import Product from '@/app/components/product/product'

const ProductPage = ({ params }: any) => {
    console.log(params?.id)

    const productDetail = products.filter((item: any) => item.slug === params?.id)
    console.log(productDetail)

    return (
        <div>
            <Product
                slug={productDetail[0]?.slug}
                title={productDetail[0]?.title}
                description={productDetail[0]?.description}
                price={productDetail[0]?.price}
                color={productDetail[0]?.color}
                links={productDetail[0]?.links}
                images={productDetail[0]?.images} />
        </div>
    )
}

export default ProductPage
