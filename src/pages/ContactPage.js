import React, { useEffect } from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import ContactPageContents from "../Components/Contact/ContactPageContents";
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';

const ContactPage = () => {
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const targetPosition = 0;

    // Scroll to the calculated position
    window.scrollTo(0, targetPosition);
  }, []);
  return (
    <>
        <HeaderThree/>
        <PageBanner title='Contact Us' bannerBg={bannerBg} currentPage='contact' />
        <ContactPageContents/>
        <BrandCarouselThree/>
        <FooterThree/>
    </>
  )
}

export default ContactPage;
