'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import productData from '@/data/Product.json'
import { ProductType } from '@/type/ProductType'

const BuyPack = () => {
    const router = useRouter()
    const { addToCart, updateCart, cartState } = useCart();
    const { openModalCart } = useModalCartContext()

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === '123')) {
            addToCart(productData.find(item => item.id === '123') as ProductType)
            updateCart('123', 1, '', '')
        }

        if (!cartState.cartArray.find(item => item.id === '124')) {
            addToCart(productData.find(item => item.id === '124') as ProductType)
            updateCart('124', 1, '', '')
        }

        if (!cartState.cartArray.find(item => item.id === '125')) {
            addToCart(productData.find(item => item.id === '125') as ProductType)
            updateCart('125', 1, '', '')
        }

        openModalCart()
    };

    const handleDetailProduct = (productId: string) => {
        // redirect to shop with category selected
        router.push(`/product/default?id=${productId}`);
    };

    return (
        <>
            <div className="buy-pack-block md:py-20 py-10 md:mt-20 mt-10 relative">
                <div className="bg-img absolute top-0 left-0 w-full h-full z-[-1]">
                    <Image
                        src={'/images/banner/bg-buy-pack-organic.png'}
                        width={3000}
                        height={3000}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container">
                    <div className="heading">
                        <div className="heading3 text-center text-white">Vegetables packs</div>
                        <div className="block text-center text-white mt-3">Sign up for early sale access, new in, promotions and more</div>
                    </div>
                    <div className='grid sm:grid-cols-2 max-sm:flex max-sm:w-full flex-col max-sm:flex-col-reverse items-center md:mt-10 mt-6'>
                        <div className="main-content text-white lg:pr-[84px] sm:pr-12 w-full">
                            <div className="list-product md:mt-10 mt-6">
                                <div className='product-item pb-5 border-b border-line'>
                                    <div className="product-main flex items-center justify-between cursor-pointer" onClick={() => handleDetailProduct('123')}>
                                        <div className="left flex items-center gap-7">
                                            <Image
                                                src={'/images/product/1000x1000.png'}
                                                width={80}
                                                height={80}
                                                alt='1-1'
                                                className=' rounded-lg overflow-hidden'
                                            />
                                            <div className="infor">
                                                <div className="product-name text-title">green cabbage</div>
                                                <div className="caption2 product-brand text-secondary2 uppercase mt-1">Glurmarket</div>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="text-title">$<span className='product-price'>4</span>,000/Kg</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='product-item pb-5 border-b border-line mt-5'>
                                    <div className="product-main flex items-center justify-between cursor-pointer" onClick={() => handleDetailProduct('124')}>
                                        <div className="left flex items-center gap-7">
                                            <Image
                                                src={'/images/product/1000x1000.png'}
                                                width={80}
                                                height={80}
                                                alt='1-2'
                                                className=' rounded-lg overflow-hidden'
                                            />
                                            <div className="infor">
                                                <div className="product-name text-title">purple cabbage</div>
                                                <div className="caption2 product-brand text-secondary2 uppercase mt-1">Glurmarket</div>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="text-title">$<span className='product-price'>3</span>,000/Kg</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='product-item pb-5 border-b border-line mt-5'>
                                    <div className="product-main flex items-center justify-between cursor-pointer" onClick={() => handleDetailProduct('125')}>
                                        <div className="left flex items-center gap-7">
                                            <Image
                                                src={'/images/product/1000x1000.png'}
                                                width={80}
                                                height={80}
                                                alt='1-3'
                                                className=' rounded-lg overflow-hidden'
                                            />
                                            <div className="infor">
                                                <div className="product-name text-title">Tinted Moisturiser</div>
                                                <div className="caption2 product-brand text-secondary2 uppercase mt-1">Glurmarket</div>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="text-title">$<span className='product-price'>4</span>,000/Kg</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-button mt-8">
                                <div
                                    className="button-main bg-green text-black w-full text-center"
                                    onClick={handleAddToCart}
                                >
                                    11$ / add set to cart
                                </div>
                            </div>
                        </div>
                        <div className="popular-product sm:pl-4 max-sm:pb-6">
                            <div className="item relative">
                                <Image
                                    src={'/images/banner/bg-pack-organic.png'}
                                    width={2000}
                                    height={1000}
                                    alt='/images/banner/bg-pack-organic.png'
                                    className='w-full object-cover'
                                />
                                <div className="dots absolute top-[15%] left-[35%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4 cursor-pointer" onClick={() => handleDetailProduct('123')}>
                                        <div className="text-title name">green cabbage</div>
                                        <div className="price text-center">$10.00</div>
                                        <div
                                            className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                            View
                                        </div>
                                    </div>
                                </div>
                                <div className="dots absolute top-[40%] left-[15%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4 cursor-pointer" onClick={() => handleDetailProduct('124')}>
                                        <div className="text-title name">purple cabbage</div>
                                        <div className="price text-center">$10.00</div>
                                        <div
                                            className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                            View
                                        </div>
                                    </div>
                                </div>
                                <div className="dots bottom-dot absolute bottom-[25%] left-[62%] cursor-pointer">
                                    <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4 cursor-pointer" onClick={() => handleDetailProduct('125')}>
                                        <div className="text-title name">green cabbage</div>
                                        <div className="price text-center">$15.00</div>
                                        <div
                                            className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                            View
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyPack