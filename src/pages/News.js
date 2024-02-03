import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import PageBanner from '../Components/PageBanner'
import bannerBg from '../assets/img/page-banner.jpg';
import NewsWrapper from '../Components/News';
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';

const News = () => {
  return (
    <>
      <HeaderThree/>
      <PageBanner title='News' bannerBg={bannerBg} currentPage='News' />
      <NewsWrapper/>
      <FooterForm/>
      <FooterThree/>
    </>
  )
}

export default News