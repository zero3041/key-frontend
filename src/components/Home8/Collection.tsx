'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';

const Collection = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="collection-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Khám phá các bộ sưu tập</div>
                    <div className="list-collection section-swiper-navigation style-outline style-center style-small-border md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                            }}
                            className='h-full'
                        >
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/swimwear.png'}
                                            width={1000}
                                            height={600}
                                            alt='swimwear'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Netflix and chill</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('top')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/top.png'}
                                            width={1000}
                                            height={600}
                                            alt='clothes'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">AI</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('sets')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/sets.png'}
                                            width={1000}
                                            height={600}
                                            alt='sets'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Design</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('outerwear')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/outerwear.png'}
                                            width={1000}
                                            height={600}
                                            alt='accessories'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Compilot</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('underwear')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/underwear.png'}
                                            width={1000}
                                            height={600}
                                            alt='lingerie'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Khác</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('t-shirt')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/t-shirt.png'}
                                            width={1000}
                                            height={600}
                                            alt='outerwear'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">t-shirt</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection