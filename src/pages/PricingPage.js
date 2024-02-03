import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import Pricing from "../Components/Price/Pricing";
import TestimonialOne from '../Components/Testimonial/TestimonialOne';
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';

const PricingPage = () => {
  return (
    <>
        <HeaderThree/>
        {/* <PageBanner title='Plan Price' bannerBg={bannerBg} currentPage='price' /> */}
        <Pricing/>
        <TestimonialOne/>
        <BrandCarouselThree/>
        <FooterForm/>
        <FooterThree/>
    </>
  )
}

export default PricingPage