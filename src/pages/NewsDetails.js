import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne';
import Details from '../Components/News/Details';
import PageBanner from '../Components/PageBanner/index';
import bannerBg from '../assets/img/page-banner.jpg';
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';

const NewsDetails = () => {
  return (
    <>
        <HeaderThree/>
        <PageBanner title='News' bannerBg={bannerBg} currentPage='News Details' />
        <Details/>
        <FooterForm/>
        <FooterThree/>
    </>
  )
}

export default NewsDetails