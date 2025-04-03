import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuCosmeticOne from '@/components/Header/Menu/MenuCosmeticOne'
import SliderCosmeticOne from '@/components/Slider/SliderCosmeticOne'
import BannerTop from '@/components/Home3/BannerTop'
import Collection from '@/components/Cosmetic1/Collection'
import CommunityStory from '@/components/Cosmetic1/CommunityStory'
import LookBook from '@/components/Cosmetic1/LookBook'
import productData from '@/data/Product.json'
import BuyPack from '@/components/Cosmetic1/BuyPack'
import AdsPhoto from '@/components/Cosmetic1/AdsPhoto.jsx'
import NewArrival from '@/components/Cosmetic1/NewArrival'
import Benefit from '@/components/Cosmetic1/Benefit'
import Newsletter from '@/components/Home4/Newsletter'
import Testimonial from '@/components/Cosmetic1/Testimonial'
import Instagram from '@/components/Cosmetic1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function HomeCosmeticOne() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuCosmeticOne props="bg-white" />
                <BannerTop props="bg-green py-3" textColor='text-black' bgLine='bg-black' />
                <SliderCosmeticOne />
            </div>
            <Collection />
            <CommunityStory />
            <LookBook data={productData} start={8} limit={12} />
            <BuyPack />
            <AdsPhoto />
            <NewArrival data={productData} start={0} limit={8} />
            <Benefit props="md:py-20 py-10" />
            <Testimonial />
            <Newsletter props="bg-transparent" />
            <Instagram />
            <Brand />
            <Footer />
            <ModalNewsletter />
        </>
    )
}
