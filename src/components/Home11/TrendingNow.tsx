'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';

const TrendingNow = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="trending-block style-six md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Trending Right Now
                    </div>
                    <div className="list-trending section-swiper-navigation style-small-border style-outline md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
                        >
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('t-shirt')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/avatar/1.png'}
                                            width={1000}
                                            height={1000}
                                            alt='outerwear'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>t-shirt</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('sweater')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/avatar/2.png'}
                                            width={1000}
                                            height={1000}
                                            alt='swimwear'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>sweater</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('top')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/avatar/4.png'}
                                            width={1000}
                                            height={1000}
                                            alt='clothes'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>top</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('dress')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/avatar/5.png'}
                                            width={1000}
                                            height={1000}
                                            alt='sets'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>dress</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/avatar/6.png'}
                                            width={1000}
                                            height={1000}
                                            alt='accessories'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>swimwear</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('outerwear')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/avatar/7.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>outerwear</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick('shirt')}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/avatar/8.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>shirt</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingNow