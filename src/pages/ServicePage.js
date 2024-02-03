import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import ProductsOne from '../Components/Services/ServicesOne';
import productsCta from '../Components/Services/ServicesCta';
import BestFeatures from "../Components/Features/BestFeatures";
import Pricing from "../Components/Price/Pricing";
import FaqOne from "../Components/Faq/FaqOne";
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';
import ProductsThree from '../Components/Services/ServicesThree';

const ServicePage = () => {
  return (
    <>
        <HeaderThree/>
        <PageBanner title='Our Products' bannerBg={bannerBg} currentPage='Service' />
        <ProductsThree/>
        <productsCta/>
        <BestFeatures/>
        <Pricing/>
        <FaqOne/>
        <FooterForm/>
        <FooterThree/>
    </>
  )
}

export default ServicePage