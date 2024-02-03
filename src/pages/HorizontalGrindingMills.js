import React, { useEffect, useState } from 'react'
import FooterThree from '../Components/Footer/FooterThree';
import HeaderThree from '../Components/Header/HeaderThree';
import HorizontalGrindingMillsPage from './HorizontalGrindingMillsPage';

const HorizontalGrinding = () => {

  return (
    <>
        <HeaderThree/>
        <HorizontalGrindingMillsPage />
        <FooterThree/>
    </>
  )
}

export default HorizontalGrinding;