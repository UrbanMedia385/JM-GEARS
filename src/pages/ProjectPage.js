import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import PortfolioOne from "../Components/Portfolio/PortfolioOne";
import PortfolioTwo from "../Components/Portfolio/PortfolioTwo";
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';

const ProjectPage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='PORTFOLIO' bannerBg={bannerBg} currentPage='project' />
        <PortfolioOne/>
        <PortfolioTwo/>
        <BrandCarouselThree/>
        <FooterForm/>
        <FooterThree/>
    </>
  )
}

export default ProjectPage;