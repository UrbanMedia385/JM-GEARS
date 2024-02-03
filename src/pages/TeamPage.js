import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import TeamOne from "../Components/Team/TeamOne";
import TeamTwo from "../Components/Team/TeamTwo";
import FooterForm from '../Components/Contact/FooterForm';
import FooterThree from '../Components/Footer/FooterThree';
import HeaderThree from '../Components/Header/HeaderThree';

const TeamPage = () => {
  return (
    <>
        <HeaderThree/>
        <PageBanner title='Our Team' bannerBg={bannerBg} currentPage='Team' />
        <TeamTwo/>
        <TeamOne/>
        <FooterForm/>
        <FooterThree/>
    </>
  )
}

export default TeamPage