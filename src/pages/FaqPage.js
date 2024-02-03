import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import FaqOne from "../Components/Faq/FaqOne";
import CtaOne from "../Components/Cta/CtaOne";
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';

const FaqPage = () => {
  return (
    <>
        <HeaderThree/>
        <PageBanner title='FAQ Ask' bannerBg={bannerBg} currentPage='faq' />
        <FaqOne/>
        <CtaOne/>
        <BrandCarouselThree/>
        <FooterForm/>
        <FooterThree/>
    </>
  )
}

export default FaqPage