import React, { useEffect } from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import AboutOne from '../Components/About/AboutOne';
import AboutBanner from '../Components/About/AboutBanner';
import Timeline from '../Components/Timeline';
import TeamThree from '../Components/Team/TeamThree';
import BrandCarouselThree from '../Components/Brands/BrandCarouselThree';
import Skill from '../Components/Skills/Skill';
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';
import AboutTwo from '../Components/About/AboutTwo';


const AboutPage = () => {
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const targetPosition = 0;

    // Scroll to the calculated position
    window.scrollTo(0, targetPosition);
  }, []);
  return (
    <>
        <HeaderThree/>
        <PageBanner title='About us' bannerBg={bannerBg} currentPage='About' />
        <AboutTwo  />
        <AboutBanner/>
        <Timeline/>
        <Skill/>
        <TeamThree/>
        <BrandCarouselThree/>
        <FooterForm />
        <FooterThree/>
    </>
  )
}

export default AboutPage